import React, { useState } from 'react'
import HelpMessage from './HelpMessage'


const HelpMessageContainer = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <HelpMessage
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
        />
    )
}
export default HelpMessageContainer