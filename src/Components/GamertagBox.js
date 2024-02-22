import React, { useState } from 'react';
import '../styles/main.css';

function GamertagBox({ onSearch }) {
  const [gamertag, setGamertag] = useState('');

  const handleInputChange = (event) => {
    setGamertag(event.target.value);
  };

  const handleSearch = () => {
    if (gamertag.trim() !== '') {
      onSearch(gamertag.trim());
    }
  };

  return (
    <div className="gamertag-box" data-testid="gt-box">
      <label htmlFor="gamertag" data-testid="box-label">Enter Xbox Live Gamertag:</label>
      <input
        type="text"
        id="gamertag"
        name="gamertag"
        placeholder="Type your gamertag here..."
        value={gamertag}
        onChange={handleInputChange}
      />
      <button id="search-button" type="button" onClick={handleSearch}>Search</button>
      <br /><br />
    </div>
  );
}

export default GamertagBox;
