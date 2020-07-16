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

    const deleteUrlFromFirebase = (url) => {
        firebase.database().ref(`websites/${url}`).remove()
    }

    useEffect(() => {
        getImagesFromFirebase()
    }, [imagesFromFirebase])

    return (
        <Dashboard
            deleteUrlFromFirebase={deleteUrlFromFirebase}
            imagesFromFirebase={imagesFromFirebase}
        />
    )
}

export default DashboardContainer