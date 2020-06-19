import React from 'react'
import { AppBar, Button, Typography, TextField } from '@material-ui/core'
// import { Add } from '@material-ui/icons'

const Dashboard = ({ getWebsiteImage, handleChange, favicon }) => {
    return (
        <div>
            <AppBar position="relative">
                <Typography edge="end" variant="h1">Grandma's Dashboard</Typography>
            </AppBar>

            <form onSubmit={getWebsiteImage}>
                <Button type="submit">Add</Button>
                <TextField onChange={handleChange} />
            </form>
            <img src={favicon} alt="Icon" />
        </div>
    )
}

export default Dashboard