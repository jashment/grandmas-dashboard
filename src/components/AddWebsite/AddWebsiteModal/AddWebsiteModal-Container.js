import React, { useState, useEffect } from 'react'
import AddWebsiteModal from './AddWebsiteModal'
import firebase from 'firebase'


const AddWebsiteModalContainer = () => {
    const [show, setshow] = useState(false);
    const [websiteUrl, setWebsiteUrl] = useState()


    const handleChange = event => {
        setWebsiteUrl(event.target.value)
    }

    const getWebsiteImage = () => {
        firebase.database().ref('/websites').push({
            url: websiteUrl, favicon: `https://api.faviconkit.com/${websiteUrl}/144`
        })
        setWebsiteUrl(null)
    }

    const handleShow = () => {
        setshow(true);
    };

    const handleClose = () => {
        setshow(false);
    };

    useEffect(() => {

    }, [show])

    return (
        <AddWebsiteModal
            getWebsiteImage={getWebsiteImage}
            handleChange={handleChange}
            handleClose={handleClose}
            handleShow={handleShow}
            websiteUrl={websiteUrl}
            show={show}
        />
    )
}

export default AddWebsiteModalContainer