import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div  className='menu'>
            <Link  style={{padding:'10px'}} to="/">Home</Link>        
            <Link style={{padding:'10px'}}  to="/login">Login</Link>
            <Link style={{padding:'10px'}}  to="/loginfrom">Login-F</Link>
            <Link style={{padding:'10px'}}  to="/register"> Register</Link>
            <Link style={{padding:'10px'}}  to="/register-rbs"> Register RBS</Link>
        </div>
    );
};

export default Header;