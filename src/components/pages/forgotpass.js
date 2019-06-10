import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/loginPage.css";
import Swal from "sweetalert2";
import logo from "../image/Group.svg";

export class Forgot extends React.Component {
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
         
          <button
            onClick={() => {
                Swal.fire('On yourname@zensoft.io will be send new password').then(()=>{this.props.history.push('/')})
            }}
            className="login-button"
          >
            Send
          </button>
          <span
            className="create-account"
          >
            New password will be sent to the email
          </span>
        </div>
      </div>
    );
  }
}
export default withRouter(Forgot);
