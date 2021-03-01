import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css';
import { DataContext } from "./Context";

class Header extends React.Component{
  static contextType = DataContext;
  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }
  menuToggleClose = () => {
    this.setState({toggle: false})
  }

  render(){
    const {toggle} = this.state;
    const {cart} = this.context;
    return(
      <header>
        <div className="menu" onClick={this.menuToggle}>
            <img src= {Menu} alt="" width="20px"/>
        </div>

        <div className="logo">
            <h1><Link to="/"><span>F</span>oot<span>W</span>ear</Link></h1>
        </div>
        <nav id="navbar">
            <ul className={toggle ? "toggle" : ""}>
                <li onClick={this.menuToggleClose}><Link to="/">Home</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/product">Product</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/men">Men</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/women">Women</Link></li>
                <li onClick={this.menuToggleClose}><Link to="/login">Login / Register</Link></li>
                <li className="close" onClick={this.menuToggle}>
                    <img src= {Close} alt="" width="20px"/>
                </li>
            </ul>
            <div className="nav-cart">
                <span>{cart.length}</span>
                <Link onClick={ () => this.context.getTotal()} to="/cart">
                    <img src= {CartIcon} alt="" width="20px"/>
                </Link>
            </div>
        </nav>          
      </header>
    )
  }
}

export default Header;
