import React, { useState } from 'react';
import Header from './Header';

const ProjectCard = ({ mainTitle }) => {
    // This component manages the state for the main gacha simulator view,
    // including the active video banner and placeholder roll functionality.
    const existingVideos = new Set([
        'featured_banner_1.mp4',
        'standard_banner_1.mp4',
        'default.mp4'
    ]);
    const defaultVideoPath = '/videos/default.mp4';

    const [videoSrc, setVideoSrc] = useState('/videos/default.mp4');
    const [activeBanner, setActiveBanner] = useState(null);

    const roll = (count) => {
        alert(`Rolling x${count}! (Functionality not implemented)`);
    };

    const handleBannerClick = (videoFile, bannerName) => {
        const newVideoPath = existingVideos.has(videoFile)
            ? `/videos/${videoFile}`
            : defaultVideoPath;
        
        setVideoSrc(newVideoPath);
        setActiveBanner(bannerName);
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="section">
                    <h3>Select a banner...</h3>
                    <div className="banner-selection">
                        <div 
                            className={`banner-placeholder ${activeBanner === 'featured_banner_1' ? 'active' : ''}`}
                            onClick={() => handleBannerClick('featured_banner_1.mp4', 'featured_banner_1')}
                        >
                            Featured Banner 1
                        </div>
                        <div 
                            className={`banner-placeholder ${activeBanner === 'featured_banner_2' ? 'active' : ''}`}
                            onClick={() => handleBannerClick('featured_banner_2.mp4', 'featured_banner_2')}
                        >
                            Featured Banner 2
                        </div>
                        <div 
                            className={`banner-placeholder ${activeBanner === 'standard_banner_1' ? 'active' : ''}`}
                            onClick={() => handleBannerClick('standard_banner_1.mp4', 'standard_banner_1')}
                        >
                            Standard Banner 1
                        </div>
                        <div 
                            className={`banner-placeholder ${activeBanner === 'standard_banner_2' ? 'active' : ''}`}
                            onClick={() => handleBannerClick('standard_banner_2.mp4', 'standard_banner_2')}
                        >
                            Standard Banner 2
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="video-placeholder">
                    <video autoPlay muted loop playsInline id="bg-video" key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    <Header title={mainTitle} />
                    <div className="rarity-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Rarity</th>
                                    <th>Base Rate</th>
                                    <th>Pity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>⭐⭐⭐⭐⭐</td>
                                    <td>0.01%</td>
                                    <td>80th pull</td>
                                </tr>
                                <tr>
                                    <td>⭐⭐⭐⭐</td>
                                    <td>5%</td>
                                    <td>10th pull</td>
                                </tr>
                                <tr>
                                    <td>⭐⭐⭐</td>
                                    <td>15%</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>⭐⭐</td>
                                    <td>30%</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>⭐</td>
                                    <td>50%</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="roll-buttons">
                        <button className="roll-button" onClick={() => roll(1)}>Roll x1</button>
                        <button className="roll-button" onClick={() => roll(10)}>Roll x10</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;