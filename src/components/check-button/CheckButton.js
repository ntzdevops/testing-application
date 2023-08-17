import { Checkbox, FormControlLabel, Radio } from "@mui/material";
import React from "react";

const CheckButton = (props) => {
  return (
    <div>
      <FormControlLabel
        control={
          props.isControl === "checkbox" ? (
            <Checkbox checked={props.checkBoxChecked} />
          ) : (
            <Radio checked={props.checkBoxChecked} />
          )
        }
        label={props.checkBoxLabel}
        labelPlacement={props.checkBoxLabelPlacement}
      />
    </div>
  );
};

export default CheckButton;
