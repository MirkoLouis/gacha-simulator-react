import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
    // This component provides a consistent layout structure for all pages.
    // It uses the Outlet component from react-router-dom to render the
    // current route's content.
    return (
        <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <NavBar /> {/* Render the NavBar here */}
            <Outlet />
        </main>
    );
};

export default Layout;