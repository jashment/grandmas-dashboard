import React, { useState, useEffect } from 'react'
import AddWebsite from './AddWebsite'
import * as firebase from 'firebase'
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}


firebase.initializeApp(firebaseConfig)

const AddWebsiteContainer = () => {
    const [websiteUrl, setWebsiteUrl] = useState()
    const [signedInUser, setSignedInUser] = useState()

    const handleChange = event => {
        setWebsiteUrl(event.target.value)
    }

    const getWebsiteImage = () => {
        const currentUser = firebase.auth().currentUser.uid
        firebase.database().ref(`/users/${currentUser}/websites`).push({
            url: websiteUrl, favicon: `https://api.faviconkit.com/${websiteUrl}/144`
        })
        setWebsiteUrl(null)
    }

    useEffect(() => {
        const currentUser = firebase.auth().currentUser
        firebase.database().ref('/users').once('value').then(snap => {
            const allUsers = snap.val()
            if (allUsers) {
                return Object.values(allUsers).map(fireUser => {
                    if (currentUser.uid === fireUser.uid) {
                        setSignedInUser(fireUser.uid)
                    }
                    return {}
                })
            }
        })
    }, [])

    return (
        <AddWebsite
            getWebsiteImage={getWebsiteImage}
            handleChange={handleChange}
            setWebsiteUrl={setWebsiteUrl}
            websiteUrl={websiteUrl}
            signedInUser={signedInUser}
        />
    )
}

export default AddWebsiteContainer