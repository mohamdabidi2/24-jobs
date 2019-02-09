import React, { Component } from 'react';
import '../css/header.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

                <header id='Header'>
                    <img className='Logo' src='https://i.imgur.com/YlTM9xQ.png' alt=''/>
                    <input className='search-bar' type='text' placeholder='Search'/>
                    <span id='login'>Login</span>
                    <span id='signup'>Be one of us</span>

                </header>
            </div>
        );
    }
}

export default Header;