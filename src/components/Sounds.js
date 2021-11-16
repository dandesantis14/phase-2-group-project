import React from 'react'
import './Sounds.css'
import Buttons from './Buttons'

function Sounds(props) {

    return (
        <div className='instrument-container'>
            <label className='instruments'>{props.instrument}</label>
            <select className='instruments'>
                <option>{props.choice1}</option>
                <option>{props.choice2}</option>
                <option>{props.choice3}</option>
            </select>
            <Buttons />
        </div>
    )
}

export default Sounds
