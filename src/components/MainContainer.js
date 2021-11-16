import React from 'react'
import MusicBuilder from './MusicBuilder'
import MySounds from './MySounds'
import './MainContainer.css'

function MainContainer() {
    return (
        <div className='music-container'>
            <MusicBuilder />
            <MySounds />
        </div>
    )
}

export default MainContainer
