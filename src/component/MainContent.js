import React, { Component } from 'react'
import './style.css';
//import Button from 'react-bootstrap/Button';
import { Route, HashRouter } from 'react-router-dom';
import About from './general/AboutUs';
import Contact from './general/contactUs';
import Faq from './general/Faq';
import Support from './general/Support';
export default class MainContent extends Component {
  render() {
    return (
      <HashRouter>
      <section className="content">
         <Route path="/about" component={About} />
         <Route path="/contact" component = {Contact}/>
         <Route path = "/faq" component = {Faq}/>
         <Route path ="/support" component={Support}/>
        
      </section>
      </HashRouter>
    )
  }
}
