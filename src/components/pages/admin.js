import React from "react";
import logo from "../image/Group.svg";
import "../styles/admin.css";
import moment from 'moment'
import Ellipse from '../image/Ellipse.svg';
import Swal from "sweetalert2";



export class Admin extends React.Component {

    addItem=()=>{
        Swal.fire({
            width: 640, 
            heightAuto: false,
            html: '<div style="display: flex; flex-direction: column; margin: 50px; align-items: flex-end;">' +
            '<span>Add dish</span>' +
            '<input class="add-item-input"></input>' +
            '<span class="add-price">Price</span>' +
            '<input class="add-item-price"></input>' +
            '</div>',
            text: 'Modal with a custom image.',
            animation: false
        })
    }

  render() {

    return (
      <div>
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="account">
            <span>
              {" "}
              <img src={Ellipse} alt="" />
              <span> Mikola S.</span>
            </span>
            <span>Balance: 111 som</span>
          </div>
        </div>
        <div className="table-header">
          <span className="title-profile">Admin Page</span>
          <span className="date-today">{moment().format("ddd DD MMM")}</span>
        </div>
        
        <div className="table">
        <span className='menu-on-today'>menu on {moment().format("DD MMM")} (today)</span>
        <div className='table-head'>
          <span className='table-name'><b>Name</b></span>
          <span className='table-price'><b>Price</b></span>
          
        </div>
        <div><span className='line'/></div>
        {/*map here  */}
        <div className='table-head'>
         <span className='table-name-admin'>some food</span>
          <span className='table-price-admin'>120 som</span>
          <span className='close'/>
        </div>
        <div><span className='line'/></div>
        <button onClick={this.addItem} className='table-button'>Add dish</button>
        </div>
      </div>
    );
  }
}
