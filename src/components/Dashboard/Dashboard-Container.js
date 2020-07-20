import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Dashboard from './Dashboard'


const DashboardContainer = () => {
    const [imagesFromFirebase, setImagesFromFirebase] = useState()
    const [loading, setLoading] = useState(false)

    const getImagesFromFirebase = () => {
        setLoading(true)
        firebase.database().ref(`websites`).once('value').then(snapshot => {
            const images = snapshot.val()
            console.log(images)
            setImagesFromFirebase(images)
        })
        setLoading(false)

    }

    const deleteUrlFromFirebase = (url) => {
        firebase.database().ref(`websites/${url}`).remove()
        getImagesFromFirebase()
    }

    useEffect(() => {
        getImagesFromFirebase()
    }, [])

    return (
        <Dashboard
            deleteUrlFromFirebase={deleteUrlFromFirebase}
            imagesFromFirebase={imagesFromFirebase}
            loading={loading}
        />
    )
}

export default DashboardContainer