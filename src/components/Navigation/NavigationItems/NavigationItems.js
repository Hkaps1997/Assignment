import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem type="url" placeholder="Url For View1" changeHandler={props.firstChangeHandler}></NavigationItem>
    <NavigationItem type="url" placeholder="Url For View2" changeHandler={props.secondChangeHandler}></NavigationItem>
  </ul>
);

export default navigationItems;
