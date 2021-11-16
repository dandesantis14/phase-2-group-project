import {useState} from 'react'

//noteIndex is coming from function that calls/builds this component
//currentIndex represent current index value that playing function is on.

function Sound({noteIndex,currentIndex,activeSounds,setActiveSounds}) {
    
    const [noteClassName,setNoteClassName] = useState(false)
    const handleNoteClick = () =>{
        setNoteClassName(!noteClassName)
        setActiveSounds([...activeSounds,noteIndex])
    }
    
    return (
        <div className={noteClassName ? "on": "off"} onClick={handleNoteClick}></div>
    )
}

export default Sound
