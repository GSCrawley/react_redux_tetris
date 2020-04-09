import React, { Component } from 'react';
import './App.css';
import GridBoard from './components/grid-board'


function App() {
  return (
    <div className="App">
  <header className="App-header">
    <h1 className="App-title">Tetris Redux</h1>
  </header>
  <GridBoard />
</div>
  );
}

export default App;
 