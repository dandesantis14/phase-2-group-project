import React from 'react'
import './MusicController.css'
import Sounds from './Sounds'

function MusicController() {
    return (
        <>
        <div className='main-controls'>
                <button className='play'>Play</button>
                <button className='record'>Record</button>
                <form>
                    <input type="number" min='1' max='300'></input>beats per minute
                </form>
        </div>    
            <Sounds instrument='kick' choice1='kick 1' choice2='kick 2' choice3='kick 3' />
            <Sounds instrument='snare'choice1='snare 1' choice2='snare 2' choice3='snare 3'/>
            <Sounds instrument='hi-hat' choice1='hi-hat 1' choice2='hi-hat 2' choice3='hi-hat 3'/>
            <Sounds instrument='cymbal' choice1='cymbal 1' choice2='cymbal 2' choice3='cymbal 3'/>
        </>
    )
}

export default MusicController
