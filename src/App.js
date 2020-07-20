import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import HelpMessage from './components/HelpMessage'
// import AddWebsite from './components/AddWebsite'

const App = () => {
  return (
    <div className="App">
      {/* <AddWebsite /> */}
      <HelpMessage />
      <Dashboard />
    </div>
  );
}

export default App;
