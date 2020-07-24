import React from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, IconButton, TextField } from '@material-ui/core'
import { AddCircleOutline } from '@material-ui/icons'


const AddWebsiteModal = ({ handleChange, websiteUrl, getWebsiteImage, handleShow, handleClose, show }) => {
    return (
        <div>
            <IconButton onClick={handleShow} className="addFormMobile">
                <AddCircleOutline />
            </IconButton>
            <Dialog
                maxWidth="md"
                open={show}
                onClose={handleClose}
            >
                <DialogTitle><h2>Add a Website!</h2></DialogTitle>
                <DialogContent>

                    <form onSubmit={getWebsiteImage}>
                        <Button type="submit">Add</Button>
                        <TextField value={websiteUrl || ''} onChange={handleChange} />
                    </form>
                    <DialogActions>

                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddWebsiteModal