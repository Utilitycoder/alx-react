import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    const { password } = this.state;
    const enableSubmit = email !== "" && password !== "";

    this.setState({ email, enableSubmit });
  };

  handleChangePassword = (event) => {
    const password = event.target.value;
    const { email } = this.state;
    const enableSubmit = email !== "" && password !== "";

    this.setState({ password, enableSubmit });
  };

  handleLoginSubmit = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" value={email} onChange={this.handleChangeEmail} />
        <input
          type="password"
          value={password}
          onChange={this.handleChangePassword}
        />
        <input type="submit" value="Login" disabled={!enableSubmit} />
      </form>
    );
  }
}

export default Login;
