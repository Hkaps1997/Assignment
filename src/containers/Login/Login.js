import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper/Wrapper";
import classes from "../Login/Login.css";
import Button from "../../components/UI/Button/Button";
import context from "../../hoc/context/context";
class Login extends Component {
  state = {
    userName: "",
    password: "",
  };
  static contextType = context;
  
  formSubmitHandler = (ev) => {
    ev.preventDefault();
    this.context.userName=this.state.userName;
    this.context.isLoggedIn=true;
    this.props.loginHandler();
  };
  inputChangedHandler = (ev, identifier) => {
    // I have used string here for simplicity purpose. But We should use a list key as an identifier.
    if (identifier === "username") {
      this.setState({ userName: ev.target.value });
    } else if (identifier === "password") {
      this.setState({ password: ev.target.value });
    }
  };
  render() {
    return (
      <Wrapper>
        <h1 className={classes.heading}>Welcome to the App</h1>
        <div className={classes.loginPage}>
          <div className={classes.form}>
            <form onSubmit={this.formSubmitHandler}>
              <input
                type="text"
                placeholder="username"
                required
                value={this.state.userName}
                onChange={(ev) => {
                  this.inputChangedHandler(ev, "username");
                }}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={this.state.password}
                onChange={(ev) => {
                  this.inputChangedHandler(ev, "password");
                }}
              />
              <Button>Login</Button>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Login;
