import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import '../css/Products.css';

export class Women extends Component{
    static contextType = DataContext;
    render(){
        const {products} = this.context;
        return(
            <div className="body" id="product">
                {
                    products.map(product => (
                        product.sex === 'f' ?
                        <div className="card" key={product._id}>
                            
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt=""/>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={ () => this.context.addCart(product._id)}>Add to card</button>
                            </div>
                        </div> : console.log("")
                        
                    ))
                }
            </div>
        )
    }
}

export default Women;