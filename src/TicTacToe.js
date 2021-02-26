import Game from './Game.jsx';

import React from 'react';
import logo from './tictactoeImg.png';
import './TicTacToe.css';

import { useHistory } from 'react-router-dom';


const TicTacToe = () => {
  const history = useHistory();
  const handleClick = () => history.push('/home');
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="ticbackButton" type="button" onClick={handleClick}>
            Back
          </button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="heading"> <h1>Tic Tac Toe</h1> </div>
        <div><Game /></div>
      </header>

    </div>
  );
}

export default TicTacToe;
