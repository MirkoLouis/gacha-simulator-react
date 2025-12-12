import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    // This component provides a tabbed interface for user login and sign-up
    // forms. It manages the active tab state.
    const [activeTab, setActiveTab] = useState('login');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`${activeTab} form submitted! (Functionality not implemented)`);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="tab-buttons">
                    <button 
                        className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => handleTabClick('login')}
                    >
                        Login
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => handleTabClick('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                <div id="login" className={`tab-content ${activeTab === 'login' ? 'active' : ''}`}>
                    <h2>GachaLearn</h2>
                    <p className="sign-in-text">Sign in to continue</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your username" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>

                <div id="signup" className={`tab-content ${activeTab === 'signup' ? 'active' : ''}`}>
                    <h2>GachaLearn</h2>
                    <p className="sign-in-text">Create a new account</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="new-username">Username</label>
                            <input type="text" id="new-username" placeholder="Choose a username" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="new-password">Password</label>
                            <input type="password" id="new-password" placeholder="Create a password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" />
                        </div>
                        <button type="submit" className="login-button">Sign Up</button>
                    </form>
                </div>

                <Link to="/" className="back-button login-back-button">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default LoginPage;