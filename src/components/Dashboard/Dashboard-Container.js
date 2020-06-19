import React, { useState } from 'react'
import Dashboard from './Dashboard'
// import { getFavicon } from '../functions/siteScraper'


const DashboardContainer = () => {
    const [favicon, setFavicon] = useState()
    const [websiteUrl, setWebsiteUrl] = useState()


    const handleChange = event => {
        console.log(event.target.value)
        if (!event.target.value.includes('http://www')) {
            setWebsiteUrl('https://www.' + event.target.value)
        } else if (!event.target.value.includes('http://')) {
            setWebsiteUrl('https://' + event.target.value)
        } else {
            setWebsiteUrl(event.target.value)
        }
    }

    const getWebsiteImage = () => {
        setFavicon(websiteUrl + '/favicon.ico')
        alert(websiteUrl + '/favicon.ico')
    }

    return (
        <Dashboard
            getWebsiteImage={getWebsiteImage}
            favicon={favicon}
            handleChange={handleChange}
        />
    )
}

export default DashboardContainer