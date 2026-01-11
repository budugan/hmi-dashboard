import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children, currentPath }) => {
    const isActive = currentPath === to;
    return (
        <Link to={to} className={`px-4 py-2 font-semibold transition-colors ${isActive ? 'text-white bg-black/20 rounded border border-sacalii-gold' : 'text-blue-100 hover:text-sacalii-gold'}`}>
            {children}
        </Link>
    )
}

const Layout = ({ children, title }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-sacalii-bg">
            {/* Top decorative bars using utility classes */}
            <div className="h-2 bg-sacalii-teal"></div>
            <div className="h-2 bg-sacalii-gold mb-4"></div>

            {/* Main Header */}
            <header className="bg-sacalii-teal text-white p-4 flex justify-between items-center shadow-md relative overflow-hidden" style={{minHeight: '130px'}}>
                <h1 className="text-3xl font-bold uppercase tracking-wider z-10 text-white">{title}</h1>

                 <nav className="hidden md:flex gap-2 z-10 absolute left-1/2 transform -translate-x-1/2 bottom-4">
                    <NavLink to="/" currentPath={location.pathname}>Dashboard</NavLink>
                    <NavLink to="/equipment" currentPath={location.pathname}>Equipment</NavLink>
                    <NavLink to="/quality" currentPath={location.pathname}>Quality</NavLink>
                    <NavLink to="/errors" currentPath={location.pathname}>Errors & Personnel</NavLink>
                </nav>

                <div className="z-10 relative right-0 flex items-center h-full">
                    <img 
                        src="logo-final.png" 
                        alt="Sacalii Limited Logo" 
                        className="h-28 w-auto rounded-lg border-2 border-sacalii-gold shadow-lg bg-white object-contain"
                    />
                </div>
                
                 <div className="header-angle-bg"></div>
            </header>

            <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;