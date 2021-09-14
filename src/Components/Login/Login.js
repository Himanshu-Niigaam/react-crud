import React, { Component } from "react";
import Config from "../../Config";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Login/Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  /** Login section starts from here */
  login() {
    fetch(
      `${Config.baseUrl}/users` +
        "?email=" +
        this.state.email +
        "&password=" +
        this.state.password
    ).then((data) => {
      data.json().then((resp) => {
        if (
          resp[0].email === this.state.email &&
          resp[0].address.zipcode === this.state.password
        ) {
          window.sessionStorage.setItem("userData", JSON.stringify(resp));
          this.props.history.push("/dashboard");
        } else {
          alert("Please check your email and password and try again.");
        }
      });
    });
  }

  /**  HTML section starts from here  **/
  render() {
    return (
      <div className="containers">
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
                  placeholder="Email"
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
                  placeholder="Password"
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

            {/* Go to Registration page */}
            <div className="text-center">
              <Link to="/registration">Go to Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
