import React, { useState, useEffect } from 'react'
import HelpMessage from './HelpMessage'
import firebase from 'firebase'


const HelpMessageContainer = () => {
    const [open, setOpen] = useState(true);
    let [dontShowAgain, setDontShowAgain] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDontShow = () => {
        setDontShowAgain(true)
    }

    useEffect(() => {
        const currentUser = firebase.auth().currentUser.uid
        firebase.database().ref(`users/${currentUser}/dontShow`).once('value').then((snapshot) => {
            const showValue = snapshot.val()
            if (showValue) {
                if (dontShowAgain !== showValue.dontShowAgain) {
                    firebase.database().ref(`users/${currentUser}/dontShow`).update({ dontShowAgain })
                    setDontShowAgain(true)
                    setLoading(false)
                }
            }
            if (!showValue) {
                firebase.database().ref(`users/${currentUser}/dontShow`).set({ dontShowAgain })
                setLoading(false)
            }
            setLoading(false)
        })
    }, [dontShowAgain])

    return (
        <HelpMessage
            dontShowAgain={dontShowAgain}
            handleClose={handleClose}
            handleDontShow={handleDontShow}
            handleOpen={handleOpen}
            loading={loading}
            open={open}
        />
    )
}
export default HelpMessageContainer