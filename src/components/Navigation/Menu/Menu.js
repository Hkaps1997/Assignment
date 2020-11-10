import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Menu.css";
import MenuItem from "./MenuItems/MenuItems";
const menu = (props) => (
  <div className={classes.Menu}>
    <MenuItem type="url" placeholder="Url for View 1" changeHandler={props.firstChangeHandler}></MenuItem>
    <MenuItem type="url" placeholder="Url for View 2" changeHandler={props.secondChangeHandler}></MenuItem>

    <Button clicked={props.logoutHandler}>Logout</Button>
  </div>
);

export default menu;
