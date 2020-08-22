import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import HelpMessage from './components/HelpMessage'
import SignIn from './components/SignIn'
import * as firebase from 'firebase'
import { CircularProgress } from '@material-ui/core'


const App = () => {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      setAuthUser(userAuth)
      setLoading(false)
    })
  }, [authUser])

  return (
    <div className="App">
      {!loading ? <SignIn /> : <CircularProgress className="progressCircle" />}

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
