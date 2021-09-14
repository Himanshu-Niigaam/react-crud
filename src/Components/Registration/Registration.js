import React from "react";
import "../Registration/Registration.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Config from "../../Config";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Registration = () => {
  const history = useHistory();

  //   Validation starts from here
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  //   Submit form method starts from here
  const onSubmit = (data, e) => {
    fetch(`${Config.baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Registration successful.");
        history.push("/login");
      });
  };

  //   HTML section starts from here
  return (
    <div className="reg-login">
      <div className="containers">
        <div className="logo">User Registration</div>
        <div className="login-item">
          <form onSubmit={handleSubmit(onSubmit)} className="form form-login">
            <div>
              <div className="form-field">
                <label className="user">
                  <span className="hidden">Username</span>
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name")}
                  className="form-input"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Full Name"
                />
              </div>
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>

            <div>
              <div className="form-field">
                <label className="user">
                  <span className="hidden">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                />
              </div>
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div>
              <div className="form-field">
                <label className="lock">
                  <span className="hidden">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-input"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                />
              </div>
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-field">
              <input type="submit" value="Submit" />
            </div>

            {/* Go to login page */}
            <div className="text-center">
              <Link to="/login">Go to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
