import React from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core'
import AddWebsite from '../AddWebsite'


const HelpMessage = ({ handleClose, open }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Welcome to your Dashboard!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This is your dashboard! Here, you can add all of the websites that you most often visit so that they are easily seen.
                        Just type in the website that you want without the "http://www".  For example, just type in "google.com"! It will appear
                        on your dashboard and open when you click.  It's so easy!
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <AddWebsite />
        </div>
    )
}

export default HelpMessage