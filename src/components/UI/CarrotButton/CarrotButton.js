import React from "react";

import classes from "./CarrotButton.css";

const carrotButton = (props) => (
  <div className={classes.Toggle} onClick={props.clicked}>
    <i
      className={props.opened ? "fa fa-arrow-down" : "fa fa-arrow-down open"}
    ></i>
  </div>
);

export default carrotButton;
