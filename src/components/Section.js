import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cart from './section/Cart';
import Details from './section/Details';
import Products from './section/Products';
import Payment from './section/Payment';
import Home from './section/Home';
import Men from './section/Men';
import Women from './section/Women';

class Section extends React.Component{
  render(){
    return(
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
      </section>
    )
  }
}

export default Section;
