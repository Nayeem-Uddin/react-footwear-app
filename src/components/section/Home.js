import React, { Component } from 'react';
import Carousel from 'infinite-react-carousel';
import '../css/Home.css'
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        const settings =  {
            autoplay: true,
            autoplaySpeed: 4000
          };
        return (
            <>
                <div className="hero">
                    <Carousel  { ...settings } >
                    <img src="/img/hero1.webp" alt="" />
                    <img src="/img/hero2.webp" alt="" />
                    <img src="/img/hero3.webp" alt="" />
                    </Carousel>
                </div>
                <div className="main-body">
                    <div className="top_body">
                        <div className="images">
                            <Link to="/men">
                                <img className="first-img" src="/img/men.jpeg" alt="" />
                            </Link>
                            <Link to="/women">
                                <img src="/img/women.webp" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="hand-picked">
                        <fieldset className="bar-text">
                            <legend className="legend-txt">OUR HAND PICKED COLLECTION FOR YOU</legend>
                        </fieldset>
                    </div>
                    <div className="super-magic">
                        <div className="super">
                            <Link to="/product"><img src="/img/super.png" alt="" /></Link>
                            <h3>Super savers</h3>
                            <p>Choose your one</p>
                            <Link to="/product" className="super-magic-btn">shop now </Link>
                        </div>
                        <div className="magic">
                            <Link to="/product"><img src="/img/magic.png" alt="" /></Link>
                            <h3>Magic potion</h3>
                            <p>Choose your one</p>
                            <Link to="/product" className="super-magic-btn">shop now </Link>
                        </div>
                        <div className="all-day">
                            <Link to="/product"><img src="/img/all-day.png" alt="" /></Link>
                            <h3>all day comfort</h3>
                            <p>Choose your one</p>
                            <Link to="/product" className="super-magic-btn">shop now </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;