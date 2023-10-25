import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  className='menu'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;