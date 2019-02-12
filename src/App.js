import React, { Component } from 'react';
import Header from './components/jsx/header'
import Home from './components/jsx/Home.jsx'
import User from './components/jsx/user'
import Footer from './components/jsx/footer'
import Login from './components/jsx/login'
import Profil from './components/jsx/profil'
import Dashboard from'./components/jsx/dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
   <Header/>
 <Profil/> 
   {/* <Home/>
   <Login/> */}
   <Footer/>
      </div>
    );
  }
}

export default App;
