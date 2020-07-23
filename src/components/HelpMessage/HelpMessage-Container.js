import React, { useState, useEffect } from 'react'
import HelpMessage from './HelpMessage'
import firebase from 'firebase'


const HelpMessageContainer = () => {
    const [open, setOpen] = useState(true);
    const [showBoolValue, setShowBoolValue] = useState('')
    const [dontShowAgain, setDontShowAgain] = useState(false)

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
        firebase.database().ref(`/dontShow`).once('value').then((snapshot) => {
            const showValue = snapshot.val()
            Object.values(showValue).map(showOrNo => {
                setShowBoolValue(showOrNo.dontShowAgain)
            })
        })
        if (showBoolValue === false) {
            firebase.database().ref(`/dontShow`).push({
                dontShowAgain
            })
        }
    }, [dontShowAgain, showBoolValue])

    return (
        <HelpMessage
            dontShowAgain={dontShowAgain}
            handleClose={handleClose}
            handleDontShow={handleDontShow}
            handleOpen={handleOpen}
            open={open}
        />
    )
}
export default HelpMessageContainer