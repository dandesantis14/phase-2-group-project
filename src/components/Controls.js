import React from 'react'
import MusicController from './MusicController'
import AddForm from './AddForm'
import SaveForm from './SaveForm'
import './Controls.css'

function Controls() {
    return (
        <div>
            <MusicController />
            <AddForm />
            <SaveForm />
        </div>
    )
}

export default Controls
