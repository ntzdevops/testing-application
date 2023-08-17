import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Login.css";
import ButtonComponent from "../components/button/Button";
import TypographyComponent from "../components/typography/TypographyComponent";
import InputField from "../components/input-field/InputField";
import CheckButton from "../components/check-button/CheckButton";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNum, setPhoneNum] = useState();

  // const fetchData = () => {
  //   axios.post("url").then;
  // };

  return (
    <Card>
      <TypographyComponent
        typoVariant="h3"
        typoAlign="center"
        typoText="SignUp Screen"
      ></TypographyComponent>
      <Container className="position">
        <InputField
          className="input-align"
          inputRequired={true}
          inputLabel="Email"
          inputVariant="outlined"
        ></InputField>
        <InputField
          className="input-align"
          inputRequired={true}
          inputLabel="Password"
          inputVariant="outlined"
        ></InputField>
        <InputField
          inputRequired={true}
          inputLabel="Phone Number"
          inputVariant="outlined"
        ></InputField>
        <CheckButton
          isControl="checkbox"
          checkBoxLabel="save the details"
          checkBoxLabelPlacement="end"
        />
        <Typography className="button-align">
          <ButtonComponent
            buttonVariant="contained"
            buttonColor="primary"
            buttonText="Submit"
          ></ButtonComponent>
          <ButtonComponent
            buttonVariant="contained"
            buttonColor="error"
            buttonText="Reset"
          ></ButtonComponent>
        </Typography>
      </Container>
    </Card>
  );
};

export default Login;
