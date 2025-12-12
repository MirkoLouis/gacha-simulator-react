import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Inventory from '../components/Inventory';

const HomePage = ({ onToggleTheme, mainTitle }) => { // Removed isInventorySectionInView and setIsInventorySectionInView
    // This component represents the main home page of the application.
    // It assembles the primary user-facing components for the gacha simulator.
    return (
        <>
            <ProjectCard mainTitle={mainTitle} />
            <Footer onToggleTheme={onToggleTheme} /> {/* Removed isInventorySectionInView */}
            <Inventory /> {/* Removed setIsInventorySectionInView and isInventorySectionInView */}
        </>
    );
};

export default HomePage;