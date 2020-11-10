import React from "react";
import classes from "./NavigationItem.css";
const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        className={classes.InputItems}
      />
    </li>
  );
};

export default navigationItem;
