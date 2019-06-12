import React from "react";
import logo from "../image/Group.svg";
import "../styles/admin.css";
import moment from 'moment'
import Ellipse from '../image/Ellipse.svg';




export class Admin extends React.Component {
    state={
        item: '',
        price: '',

        added: {
            added_items: [],
            added_price: []
        }
    }



   onChangeItem=(e)=> {
        this.setState({item: e.target.value, price: e.target.value})

   }

    onAddFood = () => {
        this.state.added.added_items.push(this.state.item);
        this.state.added.added_price.push(this.state.price);
        this.setState({item: ''})

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

          <div className='add-form'>
              <div className='add-table-position'>
              <span>Name food</span>
              <input onChange={this.onChangeItem} value={this.state.item} className="add-item-input"></input>
              </div>
              <div className='add-table-position'>
              <span>Price</span>
              <input onChange={this.onChangePrice} className="add-item-price"></input>

              </div>
              <div>    <button onClick={this.onAddFood} className='add-button'>Add</button></div>

              </div>

        <div className="table">
        <span className='menu-on-today'>menu on {moment().format("DD MMM")} (today)</span>
        <div className='table-head'>
          <span className='table-name'><b>Name</b></span>
          <span className='table-price'><b>Price</b></span>
          
        </div>

        {this.state.added.added_items.map((item, index)=>
            <div key={index}>
                <div><span className='line'/></div>
            <div  className='table-head'>

            <span className='table-name-admin'>{item}</span>
            <span className='table-price-admin'>120 som</span>
            <span className='close'/>
        </div>
            </div>)}

        <div><span className='line'/></div>
        <button onClick={this.addItem} className='table-button'>Add dish</button>
        </div>
      </div>
    );
  }
}
