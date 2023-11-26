import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.component.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    fetch("https://deploy-backend-login.onrender.com/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);

          // Check if the onLogin prop is a function before calling it
          if (typeof this.props.onLogin === 'function') {
            this.props.onLogin();
          }
        } else {
          // Display an alert or update the UI to inform the user about the incorrect password
          alert("Incorrect password. Please try again.");
        }
      })
      .catch((error) => {
        // Handle any network or server errors
        console.error("Login failed:", error);
        alert("Login failed. Please try again later.");
      });
  }

  render() {
    return (
      <div className="auth-inner">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <Link to="/forgot-password">password?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
