import React from 'react';
import Standings from './components/Standings/';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Allsvenskan tipset - komponenter</h1>
        <h2>Tabell</h2>
        <div><Standings/></div>
      </header>
    </div>
  );
}

export default App;
