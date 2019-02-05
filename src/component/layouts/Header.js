import React, { Component } from 'react';
import './Layout.css';
import bannerImage from '../images/bannerImage.jpeg';
import { NavLink, HashRouter } from 'react-router-dom';
class Header extends Component
{
   constructor(props){
       super(props);
        this.state = {
            name: this.props.ashish,
            roll : 5,
            sex: 'Male'
        };
   }
    render()
    {
        return(
            <HashRouter>    
                <div className = "header-layout">
                    <div className="container">
                        <div className="brandLogo">
                            <img src={bannerImage} className="logo"/>
                            <a href="/" className="brandName">{this.props.ashish} </a>
                        </div>
                        <ul className="navLink">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/faq">Faq</NavLink></li>
                            <li><NavLink to="/support">Support</NavLink></li>
                        </ul>
                    </div>
                </div>
            </HashRouter>
        )    
    }
}
export default Header;