import React, { Component } from "react";

import Wrapper from "../../hoc/wrapper/Wrapper";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Iframe from "react-iframe";
import context from "../../hoc/context/context";

class Layout extends Component {
  static contextType = context;
  state = {
    showMenu: false,
    firstFrameUrl: "",
    secondFrameUrl: "",
  };
  menuToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    });
  };

  firstFrameUrlChangedHandler = (ev) => {
    this.setState({
      firstFrameUrl:
        ev.target.value && this.validURL(ev.target.value)
          ? ev.target.value
          : null,
    });
  };

  secondFrameUrlChangedHandler = (ev) => {
    this.setState({
      secondFrameUrl:
        ev.target.value && this.validURL(ev.target.value)
          ? ev.target.value
          : null,
    });
  };

  validURL = (str) => {
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  logoutHandler = () => {
    this.context.isLoggedIn = false;
    this.props.loginHandler();
  };
  render() {
    return (
      <Wrapper>
        <Toolbar
          userName={this.context.userName}
          showMenu={this.state.showMenu}
          menuToggleClicked={this.menuToggleHandler}
          firstChangeHandler={(e) => {
            this.firstFrameUrlChangedHandler(e);
          }}
          secondChangeHandler={(e) => {
            this.secondFrameUrlChangedHandler(e);
          }}
          logoutHandler={this.logoutHandler}
        />
        <main className={classes.Content}>
          <div className={classes.Container}>
            <Iframe className={classes.Iframe} url={this.state.firstFrameUrl} />
            <Iframe
              className={classes.Iframe}
              url={this.state.secondFrameUrl}
            />
          </div>
        </main>
      </Wrapper>
    );
  }
}

export default Layout;
