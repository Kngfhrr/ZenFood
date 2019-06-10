import React from "react";
import logo from "../image/Group.svg";
import "../styles/profile.css";
import Ellipse from "../image/Ellipse.svg";
export class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="account">
            <span 
             onClick={() => {
              this.props.history.push("/profile");
            }}>
              {" "}
              <img src={Ellipse} alt="" />
              <span> Mikola S.</span>
            </span>
            <span>Balance: 111 som.</span>
          </div>
        </div>
        <div className="table-header">
          <span className="title-profile">Profile</span>
          <span className="your-balance">Your balance is 1291 som</span>
        </div>
        <div className="table">
          <div className="table-head">
            <span className="table-name-1">Name</span>
            <span className="table-price">Price</span>
            <span className="table-date">Date</span>
          </div>
          <div>
            <span className="line" />
          </div>
          {/*map here  */}
          <div className="table-head">
            <span className="table-name-1">some food</span>
            <span className="table-price">120 som</span>
            <span>22/05/19</span>
          </div>
          <div>
            <span className="line" />
          </div>
        </div>
      </div>
    );
  }
}
