import React from 'react';
import './style.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
    return(
        <div className="header-container">

            <img src={logo} alt="Logo" className="logo" />

            <div className="menu">
                <p><a href="#" className="menu-link">Platform</a></p>
                <p><a href="#" className="menu-link">Features</a></p>
                <p><a href="#" className="menu-link">Company</a></p>
                <p><a href="#" className="menu-link">Blog</a></p>
                <p><a href="#" className="menu-link">Contact us</a></p>
            </div>

            <div className="sign-div">
                <p><a href="#" className="signin-link">Sign in</a></p>
                <p className="signup-p"><a href="#" className="signup-link">Sign up</a></p>
            </div>

        </div>
    )
};

export default Header;