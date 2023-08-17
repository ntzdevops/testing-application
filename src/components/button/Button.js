import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        size="small"
        variant={props.buttonVariant}
        color={props.buttonColor}
      >
        {props.buttonText}
      </Button>
    </div>
  );
};

export default ButtonComponent;
