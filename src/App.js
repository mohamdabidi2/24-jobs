import React, { Component } from 'react';
import Header from './components/jsx/header'
import Home from './components/jsx/Home.jsx'
import Footer from './components/jsx/footer'
import Profil from './components/jsx/profil'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
   <Header/>
 <Profil/> 
   {/* <Home/> */}
   <Footer/>
      </div>
    );
  }
}

export default App;
