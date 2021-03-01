import React, { Component } from "react";
import { DataContext } from "../Context";
import Color from "./Color";
import '../css/Details.css';
import '../css/Cart.css'
import { Link } from "react-router-dom";

export class Cart extends Component {
    static contextType = DataContext;

    
    render() {
        const {cart,increase,reduction,removeProduct,removeAllProduct,total} = this.context;
        if(cart.length === 0){
            
            return <div className="body"> <h2 style={{textAlign:"center"}}>Cart is empty!!!</h2></div>
        }else{
            return (
                <>
                    <div className="body">
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.cnt}</span>
                                    </div>
                                    <Color colors={item.colors}/>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={ () => reduction(item._id)}> - </button>
                                        <span>{item.cnt}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment" onClick={() => removeAllProduct()}>Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                    </div> 
                </>
                )
            }
        }
}

export default Cart