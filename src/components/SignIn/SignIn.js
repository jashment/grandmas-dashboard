import React from 'react'
import { Card, Button } from '@material-ui/core'
import './SignIn.css'

const SignIn = ({ handleSignOut, handleSignInWithGoogle, authUser }) => {
    if (authUser) {
        return (
            <Card className="signOutCard">
                <Button variant="contained" color="secondary" onClick={handleSignOut}>Sign Out</Button>
            </Card>
        )
    }
    return (
        <Card className="welcomeCard">
            <h1>Welcome to your Dashboard!</h1>
            <h2>Please sign in.</h2>
            <Button variant="contained" color="primary" onClick={handleSignInWithGoogle}>Sign In With Google</Button>
        </Card>
    )
}

export default SignIn