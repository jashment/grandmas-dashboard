import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Dashboard from './Dashboard'


const DashboardContainer = () => {
    const [imagesFromFirebase, setImages] = useState()

    const getImagesFromFirebase = () => {
        firebase.database().ref('websites').once('value').then(snapshot => {
            console.log(snapshot.val())
            setImages(snapshot.val())
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