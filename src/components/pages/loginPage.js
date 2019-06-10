import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/loginPage.css";
import logo from "../image/Group.svg";

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
            <input className="login-input transition" />
          </div>
          <div className="div">
            <span>Password</span>
            <input type="password" className="login-input transition" />
            <span onClick={()=>{this.props.history.push('/forgot')}} className="forgot-password">Forgot password?</span>
          </div>
          <button
            onClick={() => {
              this.props.history.push("/menu");
            }}
            className="login-button"
          >
            Sign in
          </button>
          <span
            onClick={() => {
              this.props.history.push({ pathname: "/signup" });
            }}
            className="create-account"
          >
            Create account
          </span>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginPage);
