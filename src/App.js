import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/main.css';
import Home from './Pages/Home';
import StatsPage from './Pages/StatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stats/:gamertag' element={<StatsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
