import React, { Component, Fragment } from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import Login from "./containers/Login/Login";
import context from "./hoc/context/context";

class App extends Component {
  static contextType = context;
  state = {
    isLoggedIn: this.context.isLoggedIn,
  };
  loginHandler = () => {
    this.setState({ isLoggedIn: this.context.isLoggedIn });
  };
  render() {
    const renderData = this.state.isLoggedIn ? (
      <Layout loginHandler={this.loginHandler} />
    ) : (
      <Login loginHandler={this.loginHandler} />
    );
    return <Fragment> {renderData}</Fragment>;
  }
}

export default App;
