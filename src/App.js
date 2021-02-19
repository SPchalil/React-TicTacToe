import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TicTacToe from "./TicTacToe";



  function App() {
    return (
        <div>
            <h1 className = "hello">Hello, world!</h1>
            <div className = "enterButtonsContainer">
            <nav>
                <ul>
                    <button className = "enterButton" ><Link style={{ textDecoration: 'none' }} to="/">Home</Link></button>
                    <button className = "enterButton"><Link style={{ textDecoration: 'none' }} to="/tictactoe">TicTacToe</Link></button>
                    <button className = "enterButton"><Link style={{ textDecoration: 'none' }} to="/about">About</Link></button>
                    <button className = "enterButton"><Link style={{ textDecoration: 'none' }} to="/contact">Contact Us</Link></button>
                </ul>
            </nav>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/tictactoe">
                    <TicTacToe />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;