import React, {useState} from "react";
import logo from "../image/Group.svg";
import "../styles/admin.css";
import moment from 'moment'
import Ellipse from '../image/Ellipse.svg';


export default function Test() {
    const [price, setPrice] = useState({
        priced: '',
        items: '',
    });

    const [arrayPrice, setArrayPrice] = useState([]);
    const [arrayItem, setArrayItem] = useState([]);



    const onChangePrice = (e) => {
        const changePrice = {priced: e.target.value}
        setPrice(changePrice);
        console.log(price)
    }
    const onChangeItems = (e) => {
        const changeItem  = {items: e.target.value}
        setPrice(changeItem);
    }


    const onAddValue = () => {
      const addPrice =  (price.priced === '') ? console.log('empty') : arrayPrice.push(price.priced);
         setPrice(addPrice);
         const addItem = (price.items === '') ? console.log('empty') : arrayItem.push(price.items);
           setPrice(addItem);
     }


    return (<div>
            <div className="header">
                <div>
                    <img className="logo" src={logo} alt=""/>
                </div>
                <div className="account">
            <span className='account-span' onClick={() => {
                this.props.history.push('/profile')
            }}>
              {" "}
                <img src={Ellipse} alt=""/>
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
                    <input onChange={onChangeItems} className="add-item-input"></input>
                </div>
                <div className='add-table-position'>
                    <span>Price</span>
                    <input onChange={onChangePrice} className="add-item-price"></input>

                </div>
                <div>
                    <button onClick={onAddValue} className='add-button'>Add
                    </button>
                </div>

            </div>

            <div className="table">
                <span className='menu-on-today'>menu on {moment().format("DD MMM")} (today)</span>
                <div className='table-head'>
                    <span className='table-name'><b>Name</b></span>
                    <span className='table-price'><b>Price</b></span>
                </div>

                {arrayPrice.map((item, index) =>

                <div key={index}>
                <div><span className='line'/></div>
                <div className='table-head'>
                <span className='table-name-admin'>{item}</span>
                <span className='table-price-admin'>111 som</span>
                <div onClick={() => this.onDelete(index)} className='box-close'><span
                className='close'/></div>
                </div>
                </div>)
                }

                <div><span className='line'/></div>
                <button onClick={()=>
                console.log(arrayItem)
                } className='table-button'>Add dish
                </button>
            </div>
        </div>
    )
}