import React, { useState } from "react";
import { TextField, Button, Typography, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import axios from "axios";

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#76b852",
};

const registerFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "44px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
};

const formFieldStyle = {
  margin: "8px",
};

const successMessageStyle = {
  textAlign: "center",
  margin: "16px",
};

const API_ENDPOINT = "";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
      try {
        const response = await axios.post(API_ENDPOINT, values);

        if (response.status === 200) {
          setSubmitted(true);
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error sending registration data", error);
      }
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div style={formContainerStyle}>
      <form style={registerFormStyle} onSubmit={handleSubmit}>
        {submitted && valid && (
          <div style={successMessageStyle}>
            <Typography variant="h5">
              Welcome {values.firstName} {values.lastName}
            </Typography>
            <Typography>Your registration was successful!</Typography>
          </div>
        )}
        {!valid && (
          <TextField
            style={formFieldStyle}
            label="First Name"
            fullWidth
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
            error={submitted && !values.firstName}
            helperText={
              submitted && !values.firstName && "Please enter a first name"
            }
          />
        )}
        {!valid && (
          <TextField
            style={formFieldStyle}
            label="Last Name"
            fullWidth
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            error={submitted && !values.lastName}
            helperText={
              submitted && !values.lastName && "Please enter a last name"
            }
          />
        )}
        {!valid && (
          <TextField
            style={formFieldStyle}
            label="Email"
            fullWidth
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={submitted && !values.email}
            helperText={
              submitted && !values.email && "Please enter an email address"
            }
          />
        )}
        {!valid && (
          <Button
            style={formFieldStyle}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        )}
      </form>
      {/* <Snackbar open={submitted && valid} autoHideDuration={6000}>
        <Alert severity="success">
          Welcome {values.firstName} {values.lastName}! Your registration was
          successful.
        </Alert>
      </Snackbar> */}
    </div>
  );
}
