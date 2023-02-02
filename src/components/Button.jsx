import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const classInpout = `${classes.button} ${props.className}`;
  return (
    <button className={classInpout} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
