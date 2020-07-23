import React from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core'
import AddWebsite from '../AddWebsite'
import './HelpMessage.css'


const HelpMessage = ({ dontShowAgain, handleClose, handleDontShow, open }) => {
    return (
        dontShowAgain === true ? (
            <div>
                <Dialog
                    maxWidth="md"
                    open={open}
                    onClose={handleClose}
                    className="helpModal"
                >
                    <DialogTitle><h1>Welcome to your Dashboard!</h1></DialogTitle>
                    <DialogContent>
                        <DialogContentText className="modalText">
                            This is your dashboard! Here, you can add all of the websites that you most often visit so that they are easily seen.
                            Just type in the website that you want without the "http://www".  For example, just type in "google.com"! It will appear
                            on your dashboard and open when you click.  It's so easy!
                    </DialogContentText>
                        <DialogActions>
                            <Button className="dontShowBtn" onClick={handleDontShow}>Don't Show This Box Again</Button>
                            <Button variant="outlined" onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
                <AddWebsite />
            </div>
        ) : <AddWebsite />
    )
}

export default HelpMessage