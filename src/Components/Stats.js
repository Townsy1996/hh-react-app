import React from 'react';
import '../styles/main.css';

function Stats({data}) {

  if (!data) {
    return (
      <div id="statsContainer" className="grid-container">
        <p>Loading...</p>
      </div>
    );
  }

  // Check if the required properties exist in the data object
 

  const { TotalKills, TotalDeaths, TotalAssists, TotalGamesCompleted, TotalGamesWon, TotalGamesLost, 
  TotalGamesTied, TotalGrenadeKills, TotalMeleeKills, TotalAssassinations,
  TotalPowerWeaponKills } = data.Results[0].Result.ArenaStats;

  

  

  return (
    <div id="statsContainer" className="grid-container">
      <div className="stat-box" id="totalKills">
        <br />
        <h3>Total Kills:</h3>
        <br />
        <p>{TotalKills}</p>
      </div>
      <div className="stat-box" id="totalDeaths">
        <br />
        <h3>Total Deaths:</h3>
        <br />
        <p>{TotalDeaths}</p>
      </div>
      <div className="stat-box" id="totalAssists">
        <br />
        <h3>Total Assists:</h3>
        <br />
        <p>{TotalAssists}</p>
      </div>
      <div className="stat-box" id="k/d-ratio">
        <br />
        <h3>Kill/Death Ratio:</h3>
        <br />
        <p></p>
      </div>
      <div className="stat-box" id="totalGamesCompleted">
        <br />
        <h3>Total Games:</h3>
        <br />
        <p>{TotalGamesCompleted}</p>
      </div>
      <div className="stat-box" id="totalGamesWon">
        <br />
        <h3>Games Won:</h3>
        <br />
        <p>{TotalGamesWon}</p>
      </div>
      <div className="stat-box" id="totalGamesLost">
        <br />
        <h3>Games Lost:</h3>
        <br />
        <p>{TotalGamesLost}</p>
      </div>
      <div className="stat-box" id="totalGamesTied">
        <br />
        <h3>Games Tied:</h3>
        <br />
        <p>{TotalGamesTied}</p>
      </div>
      <div className="stat-box" id="win/loss-percentage">
        <br />
        <h3>Win/Loss:</h3>
        <br />
        <p></p>
      </div>
      <div className="stat-box" id="grenadeKills">
        <br />
        <h3>Grenade Kills:</h3>
        <br />
        <p>{TotalGrenadeKills}</p>
      </div>
      <br /><br /><br />
      <div className="stat-box" id="meleeKills">
        <br />
        <h3>Melee Kills:</h3>
        <br />
        <p>{TotalMeleeKills}</p>
      </div>
      <div className="stat-box" id="assasinations">
        <br />
        <h3>Assassinations:</h3>
        <br />
        <p>{TotalAssassinations}</p>
      </div>
      <div className="stat-box" id="powerWeaponKills">
        <br />
        <h3>Power Weapon Kills:</h3>
        <p>{TotalPowerWeaponKills}</p>
      </div>
    </div>
  );
}

export default Stats;
