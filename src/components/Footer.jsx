import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onToggleTheme }) => { // Removed isInventorySectionInView
    return (
        <div className="footer">
            <div className="section">
                <a
                    href="#inventory-section"
                    id="inventory-toggle"
                    // Removed conditional className
                ><h3>Your Inventory</h3></a>
            </div>
            <div className="footer-buttons">
                <Link to="/idea"><button className="footer-button project-details">Project Details</button></Link>
                <Link to="/quiz"><button className="footer-button go-to-quizzes">Go to Quizzes</button></Link>
                <button id="theme-switcher" className="footer-button" onClick={onToggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
};

export default Footer;