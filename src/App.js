import Game from './Game.jsx';

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className = "heading"> <h1>Tic Tac Toe</h1> </div>
        <div><Game /></div>
      </header>
     
    </div>
  );
}

export default App;
