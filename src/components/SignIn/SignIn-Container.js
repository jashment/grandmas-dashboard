import React, { useState, useEffect } from 'react'
import SignIn from './SignIn'
import * as firebase from 'firebase'

var provider = new firebase.auth.GoogleAuthProvider();

const SignInContainer = () => {
    const [authUser, setAuthUser] = useState(null)

    const handleSignInWithGoogle = () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            return firebase.auth().signInWithPopup(provider).then(function (result) {
                var { accessToken } = result.credential;
                var { user } = result;
                if (result.additionalUserInfo.isNewUser !== false) {
                    firebase.database().ref('/users/').child(`${user.uid}`).set({
                        email: user.email,
                        name: user.displayName,
                        token: accessToken,
                        uid: user.uid,
                    })
                }
            }).catch(function (error) {
                console.log(error)
            });
        })

    }

    const handleSignOut = () => {
        firebase.auth().signOut()
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(userAuth => {
            setAuthUser(userAuth)
        })
    }, [authUser])
    return (
        <SignIn
            authUser={authUser}
            handleSignInWithGoogle={handleSignInWithGoogle}
            handleSignOut={handleSignOut}
        />
    )
}

export default SignInContainer