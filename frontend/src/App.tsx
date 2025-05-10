import React from 'react';
import './App.css';
import { RouterList } from './components/RouterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="App-title">DriveNets Dashboard</h1>
        </div>
      </header>
      <main className="App-main">
        <div className="container">
          <div className="placeholder-container">
            <div className="placeholder-icon">🚀</div>
            <h2 className="placeholder-title">Coming Soon</h2>
            <div className="construction-line"></div>
            <RouterList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
