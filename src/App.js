import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import HelpMessage from './components/HelpMessage'

const App = () => {
  return (
    <div className="App">
      <HelpMessage />
      <Dashboard />
    </div>
  );
}

export default App;
