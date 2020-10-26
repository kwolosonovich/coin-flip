import React, { useState } from "react";
import CoinCounter from "./CoinCounter"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Coin Flip
      </header>
      <CoinCounter />
    </div>
  );
}

export default App;
