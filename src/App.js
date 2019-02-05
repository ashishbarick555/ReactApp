import React, { Component } from 'react';
import './App.css';
import Header from './component/layouts/Header';
import SidebarNav from './component/layouts/Sidebar';
import Footer from './component/layouts/Footer';
import MainContent from './component/MainContent';
//import Button from 'react-bootstrap/lib/Button';
class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
          <Header ashish="Work Hard in #Silence..." id="STL EMp" />
      </header>
      <div className="mainContent">
          <SidebarNav />

          <MainContent></MainContent>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
    );
  }
}

export default App;
