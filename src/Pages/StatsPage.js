import React, { useState } from 'react';
import Header from '../Components/Header';
import Stats from '../Components/Stats';
import GamertagBox from '../Components/GamertagBox';

function StatsPage() {
  
  const [statsData, setStatsData] = useState(null);
  const apiKey = '6cd62baf9d4e40be81836d219063a41e'; 

  const handleSearch = async (gamertag) => {
    try {
      
      const response = await fetch(`https://www.haloapi.com/stats/h5/servicerecords/arena?players=${encodeURIComponent(gamertag)}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStatsData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching player stats:', error);
    }
  };

  return (
    <div>
      <Header />
      <GamertagBox onSearch={handleSearch} /> 
      <Stats data={statsData} />
    </div>
  );
}

export default StatsPage;