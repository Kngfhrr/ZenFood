import React from "react";
import "./styles/loginPage.css";
import logo from "./image/Group.svg";
export class LoginPage extends React.Component {
  render() {
    return (
          
      <div className="login">
      <div>
       <img className="img" src={logo} alt="" />
       </div>

        <div className="login-form">
          <div className="div">
            <span>Email</span>
            <input className="login-input" />
          </div>
          <div className="div">
            <span>Password</span>
            <input type='password' className="login-input" />
          </div>
          <button className="login-button">Sign in</button>
        </div>
      </div>
    );
  }
}
