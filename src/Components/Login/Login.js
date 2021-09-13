import React, { Component } from "react";
import Config from "../../Config";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  login() {
    fetch(
      `${Config.baseUrl}/posts` +
        "?email=" +
        this.state.email +
        "&password=" +
        this.state.password
    ).then((data) => {
      data.json().then((resp) => {
        if (resp.length > 0) {
          this.props.history.push("/dashboard");
        } else {
          alert("Please check your email and password and try again.");
        }
        console.warn("resp", resp);
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="logo">User Login</div>
        <div className="login-item">
          <div className="form form-login">
            <div>
              <div className="form-field">
                <label className="user">
                  <span className="hidden">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-input form-control"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="form-field">
                <label className="lock">
                  <span className="hidden">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-input form-control"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-field">
              <input
                onClick={() => {
                  this.login();
                }}
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
