import React from 'react'
import AddWebsite from '../AddWebsite'

const Dashboard = ({ imagesFromFirebase }) => {
    return (
        <div>
            <AddWebsite />
            <img src={imagesFromFirebase} alt="Icon" />
        </div>
    )
}

export default Dashboard