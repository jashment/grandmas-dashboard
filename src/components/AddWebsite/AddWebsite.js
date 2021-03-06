import React from 'react'
import { AppBar, Button, Typography, TextField, IconButton } from '@material-ui/core'
import { AddCircleOutline } from '@material-ui/icons'
import './AddWebsite.css'
import AddWebsiteModal from './AddWebsiteModal'


const AddWebsite = ({ getWebsiteImage, handleChange, handleShow, handleClose, websiteUrl, show }) => {

    return (
        <div>
            <AppBar position="relative">
                <Typography edge="end" variant="h2">Visual Bookmark</Typography>
            </AppBar>
            <form className="addFormWeb" onSubmit={getWebsiteImage}>
                <Button className="addButtonWeb" color="primary" variant="contained" type="submit">Add</Button>
                <TextField autoFocus={true} variant="outlined" value={websiteUrl || ''} onChange={handleChange} />
            </form>
            <IconButton onClick={handleShow} className="addFormMobile">
                <AddCircleOutline />
            </IconButton>
            <AddWebsiteModal
                show={show}
                handleClose={handleClose}
                getWebsiteImage={getWebsiteImage}
                handleChange={handleChange}
                websiteUrl={websiteUrl}
            />
        </div>
    )
}


export default AddWebsite