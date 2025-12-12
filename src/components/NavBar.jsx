import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Use centralized styles from src/styles.css

const NavBar = () => {
    // This component provides global navigation for the application.
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/projects" className="navbar-link">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;