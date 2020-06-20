import React, { useState } from 'react'
import AddWebsite from './AddWebsite'
import { getFavicon } from '../../functions/siteScraper'
import * as firebase from 'firebase'
// import { firebaseConfig } from '../../Firebase/firebase'
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
    const [favicon, setFavicon] = useState()
    const [websiteUrl, setWebsiteUrl] = useState()


    const handleChange = event => {
        event.preventDefault()
        if (!event.target.value.includes('http://www')) {
            setWebsiteUrl('https://www.' + event.target.value)
            console.log(websiteUrl)
        } else if (!event.target.value.includes('http://')) {
            setWebsiteUrl('https://' + event.target.value)
            console.log(websiteUrl)
        } else {
            setWebsiteUrl(event.target.value)
            console.log(websiteUrl)
        }
    }

    const getWebsiteImage = () => {
        // setFavicon(getFavicon(websiteUrl))
        // fetch(websiteUrl).then(promise => {
        //     console.log(promise)
        // })
        setFavicon(websiteUrl + '/favicon.ico')
        console.log(favicon)
        firebase.database().ref('/websites').push(favicon)
        console.log(favicon)
    }

    return (
        <AddWebsite
            getWebsiteImage={getWebsiteImage}
            favicon={favicon}
            handleChange={handleChange}
        />
    )
}

export default AddWebsiteContainer