import React from 'react';
import Header from '../Components/Header';
import WelcomeMessage from '../Components/WelcomeMessage';
import News from '../Components/News';
import Maps from '../Components/Maps';
import Weapons from '../Components/Weapons';

function Home() {

    return (
      <div>
        <Header />
        <WelcomeMessage />
        <News />
        <Maps />
        <Weapons />
      </div>
    );
  }

  export default Home;

