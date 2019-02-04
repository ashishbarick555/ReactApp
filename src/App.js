import React, { Component } from 'react';
import './App.css';
import Header from './component/layouts/Header';
import Sidebar from './component/layouts/Sidebar';
import Footer from './component/layouts/Footer';
import MainContent from './component/MainContent';
import Button from 'react-bootstrap/lib';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <Header ashish="Ashish header" id="STL EMp" />
        </header>
        <div className="mainContent">
            <Sidebar/>
            <MainContent/>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
