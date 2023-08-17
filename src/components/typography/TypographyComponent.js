import { Typography } from "@mui/material";
import React from "react";

const TypographyComponent = (props) => {
  return (
    <div>
      <Typography variant={props.typoVariant} align={props.typoAlign}>
        {props.typoText}
      </Typography>
    </div>
  );
};

export default TypographyComponent;
