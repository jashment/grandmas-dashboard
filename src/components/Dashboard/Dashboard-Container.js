import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Dashboard from './Dashboard'


const DashboardContainer = () => {
    const [imagesFromFirebase, setImagesFromFirebase] = useState()

    const getImagesFromFirebase = () => {
        firebase.database().ref(`websites`).once('value').then(snapshot => {
            const images = snapshot.val()
            setImagesFromFirebase(images)
        })
    }

    useEffect(() => {
        getImagesFromFirebase()
    }, [])

    return (
        <Dashboard
            imagesFromFirebase={imagesFromFirebase}
        />
    )
}

export default DashboardContainer