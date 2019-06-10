import React from "react";
import "../styles/signUp.css";
import logo from "../image/Group.svg";
export default class SignUp extends React.Component {
  render() {
    return (
      <div className="login">
        <div>
          <img className="img" src={logo} alt="" />
        </div>

        <div className="signup-form">
          <div className="div">
            <span>Email</span>
            <input className="login-input transition" />
          </div>
          <div className="div">
            <span>Password</span>
            <input type="password" className="login-input transition" />
          </div>
          <div className="div">
            <span>Confirm Password</span>
            <input type="password" className="login-input transition" />
          </div>
          <button className="login-button">Sign Up</button>
          <div>
            {" "}
            <span
              onClick={() => {
                this.props.history.push("/");
              }}
              className="login-here"
            >
              Have already an account?
            </span>
          </div>
        </div>
      </div>
    );
  }
}
