import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Link to="/login"><button className="sign-in-button">Sign In</button></Link>
        </header>
    );
};

export default Header;