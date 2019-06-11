import React from 'react';
import Standings from './components/Standings/';
import Topscorers from './components/Topscorers'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Allsvenskan tipset - komponenter</h1>
        <h2>Tabell</h2>
        <div><Standings/></div>
        <h2>Skytteliga</h2>
        <div><Topscorers/></div>
      </header>
    </div>
  );
}

export default App;
