import React from 'react';
import Logo from './assets/svgs/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '400px', height: '400px' }}>
          <Logo />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
