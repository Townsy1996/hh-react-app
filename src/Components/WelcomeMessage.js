import React from 'react';
import { Link } from "react-router-dom";
import '../styles/main.css';

function WelcomeMessage() {
  return (
    <div className="welcome-container" id="menu-container">
      <div id="welcome-message">
        <p>
          Hello, and welcome to Halo Helper! Whether you're a seasoned Spartan or just stepping onto the battlefield
          for the first time, this website is your ultimate companion for mastering the arena of Halo 5: Guardian's multiplayer.
          Our mission is to provide you with comprehensive stats, insightful guides, and invaluable strategies to elevate
          your gameplay to new heights. From detailed map breakdowns to weapon analyses and player tips, Halo Helper is here
          to equip you with the knowledge and skills needed to dominate the competition. Click on the link below to navigate to 
          the player stats page or use the menu in upper right corner. 
        </p>
        <br></br>
        <Link id="player-stats" to="/stats/Mint Blitz">View Player Stats</Link>

       
      </div>
      <br></br>
    </div>
  );
}

export default WelcomeMessage;
