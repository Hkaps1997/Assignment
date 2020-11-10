import React, { Fragment } from "react";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";
import classes from "./Toolbar.css";
import Button from "../../UI/Button/Button";
import CarrotButton from "../../UI/CarrotButton/CarrotButton";
const toolbar = (props) => {
  return (
    <Fragment>
      <header className={classes.Toolbar}>
        <div className={classes.UserName}>{props.userName}</div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems
            firstChangeHandler={props.firstChangeHandler}
            secondChangeHandler={props.secondChangeHandler}
          />
        </nav>
        <Button btnType="DesktopOnly" clicked={props.logoutHandler}>Logout</Button>
        <CarrotButton
          opened={props.showMenu}
          clicked={props.menuToggleClicked}
        />
      </header>
      {props.showMenu === true ? (
        <Menu
          firstChangeHandler={props.firstChangeHandler}
          secondChangeHandler={props.secondChangeHandler}
          logoutHandler={props.logoutHandler}
        />
      ) : null}
    </Fragment>
  );
};

export default toolbar;
