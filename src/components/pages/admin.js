import React from "react";
import logo from "../image/Group.svg";
import "../styles/admin.css";
import Ellipse from '../image/Ellipse.svg';

export class Admin extends React.Component {

 
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
          <span className="date-today">Monday 18 February</span>
        </div>
        
        <div className="table">
        <span className='menu-on-today'>menu on 18 February (today)</span>
        <div className='table-head'>
          <span className='table-name'>Name</span>
          <span className='table-price'>Price</span>
          
        </div>
        <div><span className='line'/></div>
        {/*map here  */}
        <div className='table-head'>
         <span className='table-name'>some food</span>
          <span className='table-price'>120 som</span>
          <span className='close'/>
        </div>
        <div><span className='line'/></div>
        <button onClick={this.scan} className='table-button'>Add item</button>
        </div>
      </div>
    );
  }
}
