
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="header" data-testid="header">
            <div className="border-container">
                <button type="button" id="menu-toggle" data-testid="menu-toggler" onClick={handleMenuToggle}>&#9776;</button>
                <div className={`menu-container ${menuVisible ? 'active' : ''}`} data-testid="menu-box">
                    <ul className="menu">
                        <li><Link to="/" data-testid="home-link">Home</Link></li>
                        <li><Link to="" data-testid="guide-link">New Player Guide</Link></li>
                        <li><Link to="https://www.halowaypoint.com/" data-testid="waypoint-link" target="_blank" rel="noopener noreferrer">Halo Waypoint</Link></li>
                        <li><Link to="/stats/Mint Blitz" data-testid="stats-link">Player Stats</Link></li>
                        <li><Link to="">Signup</Link></li>
                        
                    </ul>
                </div>
            </div>

            <h1 id="main-title">Halo Helper: Stats and Guide</h1>
        </div>
    );
}

export default Header;