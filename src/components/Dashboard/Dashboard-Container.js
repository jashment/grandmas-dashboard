import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Dashboard from './Dashboard'


const DashboardContainer = () => {
    const [imagesFromFirebase, setImagesFromFirebase] = useState()
    const [loading, setLoading] = useState(false)

    const getImagesFromFirebase = () => {
        const currentUser = firebase.auth().currentUser.uid
        setLoading(true)
        firebase.database().ref(`users/${currentUser}/websites`).once('value').then(snapshot => {
            const images = snapshot.val()
            setImagesFromFirebase(images)
        })
        setLoading(false)
    }

    const deleteUrlFromFirebase = (url) => {
        const currentUser = firebase.auth().currentUser.uid
        firebase.database().ref(`users/${currentUser}/websites/${url}`).remove()
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