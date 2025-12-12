import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IdeaPage = () => {
    // This component displays the project details and key features in an
    // accordion-style interface.
    const featuresData = [
        { title: 'Interactive Gacha Learning', description: 'Earn LearnCoins by completing quizzes and use them to pull for unique characters.' },
        { title: 'Collect & Track Characters', description: 'View your collection and see each character\'s rarity and progress.' },
        { title: 'Exclusive Banners', description: 'Enjoy limited-time banners featuring rare characters to keep the excitement alive.' },
        { title: 'Fair Pity System', description: 'Transparent odds and a guaranteed high-rarity character after a set number of pulls.' },
        { title: 'Secure Blockchain Currency', description: 'LearnCoins are protected by blockchain algorithms to prevent cheating and ensure fairness.' },
        { title: 'Cloud Progress Sync', description: 'Create an account to save your progress to the cloud—your collection and achievements are always with you, no matter which device you use. Play anywhere, anytime, and never lose your hard-earned LearnCoins and characters.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleFeatureClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="idea-container">
            <Link to="/" className="back-button">&larr; Back to Home</Link>
            <div className="content">
                <h1>GachaLearn</h1>
                <p>Learning complex concepts can be tough, especially when the motivation to keep going wears off. GachaLearn transforms traditional learning into an interactive, rewarding experience by integrating a gacha-style system that rewards effort and progress.</p>
                <p>Through gamified quizzes and collectible characters, users earn LearnCoins and unlock rewards, making learning both fun and memorable. We’re here to help knowledge stick and keep the journey exciting.</p>
                <h2>Key Features</h2>
                <div className="features">
                    {featuresData.map((feature, index) => (
                        <div key={index}>
                            <button 
                                className={`feature-button ${openIndex === index ? 'active' : ''}`}
                                onClick={() => handleFeatureClick(index)}
                            >
                                {feature.title}
                            </button>
                            <div 
                                className="feature-details" 
                                style={{ maxHeight: openIndex === index ? '100px' : '0' }}
                            >
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IdeaPage;
