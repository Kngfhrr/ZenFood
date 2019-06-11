import React from "react";
import logo from "../image/Group.svg";
import "../styles/menu.css";
import Swal from "sweetalert2";
import Ellipse from "../image/Ellipse.svg";

export class Menu extends React.Component {
  addFood = () => {
    Swal.fire({
      title: "Are you sure in your choose?",
      showCancelButton: true,
      confirmButtonColor: "#0468E7",
        animation: false,
      cancelButtonColor: "#B4B4B4",
      cancelButtonText: "Nope, go back",
      confirmButtonText: "Yep, confirm!",
      customClass: {
        popup: "popup-class",
        header: "header-class",
        title: "title-class",
        closeButton: "close-button-class",
        content: "content-class",
        actions: "actions-class",
        confirmButton: "confirm-button-class",
        cancelButton: "cancel-button-class",
    
      }
    }).then(result => {
      if (result.value) {
        Swal.fire("Confirmed");
      }
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="account">
            <span className="profile-account">
              {" "}
              <img src={Ellipse} alt="" />
              <span
                onClick={() => {
                  this.props.history.push("/profile");
                }}
              >
                {" "}
                Mikola S.
              </span>
            </span>
            <span>Balance: 111 som</span>
          </div>
        </div>
        <div className="table-header">
          <span className="title-profile">Today's menu</span>
          <span className="date-today">Monday 18 February</span>
        </div>

        <div className="table">
          <span className="menu-on-today">menu on 18 February (today)</span>
          <div className="table-head">
            <span className="table-name">
              <b>Name</b>
            </span>
            <span className="table-price">
              <b>Price</b>
            </span>
          </div>
          <div>
            <span className="line" />
          </div>
          {/*map here  */}
          <div className="table-head">
            <span className="table-name-menu">some food</span>
            <span className="table-price-menu">120 som</span>
            <button onClick={this.addFood} className="button-menu">
              <b>+</b>
            </button>
          </div>
          <div>
            <span className="line" />
          </div>
        </div>
      </div>
    );
  }
}
