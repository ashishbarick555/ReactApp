import React, { Component } from 'react';
import './Layout.css';
import bannerImage from '../images/nsic.png';
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
       <div className = "header-layout">
            <div className="container">
                <div className="brandLogo">
                    <img src={bannerImage} className="logo"/>
                    <a href="/" className="brandName">{this.props.ashish} </a>
                </div>
                <ul className="navLink">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
        </div>
        )    
    }
}
export default Header;