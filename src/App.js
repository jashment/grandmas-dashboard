import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import HelpMessage from './components/HelpMessage'
import SignIn from './components/SignIn'
import * as firebase from 'firebase'


const App = () => {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      setAuthUser(userAuth)
    })
  }, [authUser])

  return (
    <div className="App">

      <SignIn />
      {authUser ?
        <>
          <HelpMessage />
          <Dashboard />
        </>
        : null}
    </div>
  );
}

export default App;
