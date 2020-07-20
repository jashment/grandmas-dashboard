import React, { useState } from 'react'
import HelpMessage from './HelpMessage'
import firebase from 'firebase'


const HelpMessageContainer = () => {
    const [open, setOpen] = useState(true);
    const [dontShowAgain, setDontShowAgain] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDontShow = () => {
        setDontShowAgain(true)
        firebase.database().ref(`/dontShow`).push({
            dontShowAgain
        })
    }



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