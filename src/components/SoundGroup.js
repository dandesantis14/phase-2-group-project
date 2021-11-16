import React from 'react'
import Sound from './Sound'


function SoundGroup() {
    const [activeSounds,setActiveSounds] = useState([])
    
    const noteComponents = () => {
        const notesDisplay = []
        for (let i=0; i<16; i++){
            notesDisplay.push(<Sound key={i} activeSounds={activeSounds} setActiveSounds={setActiveSounds} noteIndex={i+1}/>)
        }
        return notesDisplay;
    }



    return (
        <div>
            {noteComponents()}
        </div>
    )
}

export default SoundGroup
