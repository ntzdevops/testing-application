import { TextField } from "@mui/material";
import React from "react";

const InputField = (props) => {
  return (
    <div>
      <TextField
        required={props.inputRequired}
        label={props.inputLabel}
        variant={props.inputVariant}
      ></TextField>
    </div>
  );
};

export default InputField;
