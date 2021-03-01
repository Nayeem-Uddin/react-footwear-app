import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Color from "./Color";
import '../css/Details.css';


export class Details extends Component{
    static contextType = DataContext;
    state = {
        product: []
    }
    getproduct = () => {
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id;
            })
            this.setState({product: data})
        }
    }
    componentDidMount(){
        this.getproduct();
    }

    render(){
        const {product} = this.state;
        const {products} = this.context;
        return(
            <>
            <div className="body">
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Color colors ={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <button className="cart" onClick={ () => this.context.addCart(item._id)}>Add to card</button>
                                {/* <Link to="/cart" className="cart">Add to cart</Link> */}
                            </div>

                        </div>
                    ))
                }
                </div>
            </>
        )
    }
}

export default Details;