import React from 'react'
import { AppBar, Button, Typography, TextField } from '@material-ui/core'


const AddWebsite = ({ getWebsiteImage, handleChange, websiteUrl, setWebsiteUrl }) => {
    return (
        <div>
            <AppBar position="relative">
                <Typography edge="end" variant="h1">Grandma's Dashboard</Typography>
            </AppBar>

            <form onSubmit={getWebsiteImage}>
                <Button type="submit">Add</Button>
                <TextField value={websiteUrl || ''} onBlur={event => event.target.value = null} onChange={handleChange} />
            </form>
        </div>
    )
}

export default AddWebsite