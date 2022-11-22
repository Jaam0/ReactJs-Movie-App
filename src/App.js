import React from 'react';

import logo from "./logo.svg";
import "./App.css";
import MyRoutes from "./routers/routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">🎬Movies</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
