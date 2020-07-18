import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import AddWebsite from './components/AddWebsite'

const App = () => {
  return (
    <div className="App">
      <AddWebsite />
      <Dashboard />
    </div>
  );
}

export default App;
