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
    }, [])

    const setImages = (imagesFromFirebase) => {
        const url = 'http://favicongrabber.com/api/grab/'
        Object.keys(imagesFromFirebase).forEach((key) => {
            console.log(key)
            fetch(`${url}${imagesFromFirebase[key].url}`).then((response) => {
                console.log(response.json())
            })
        })
    }

    return (
        <Dashboard
            deleteUrlFromFirebase={deleteUrlFromFirebase}
            imagesFromFirebase={imagesFromFirebase}
            setImages={setImages}
        />
    )
}

export default DashboardContainer