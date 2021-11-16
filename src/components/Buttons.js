import React, {useState} from 'react'

function Buttons() {
    const [note1, setNote1] = useState(false)
    const [note2, setNote2] = useState(false)
    const [note3, setNote3] = useState(false)
    const [note4, setNote4] = useState(false)
    const [note5, setNote5] = useState(false)
    const [note6, setNote6] = useState(false)
    const [note7, setNote7] = useState(false)
    const [note8, setNote8] = useState(false)
    const [note9, setNote9] = useState(false)
    const [note10, setNote10] = useState(false)
    const [note11, setNote11] = useState(false)
    const [note12, setNote12] = useState(false)
    const [note13, setNote13] = useState(false)
    const [note14, setNote14] = useState(false)
    const [note15, setNote15] = useState(false)
    const [note16, setNote16] = useState(false)

    function handleClick1() {
        setNote1(!note1)
    }
    function handleClick2() {
        setNote2(!note2)
    }
    function handleClick3() {
        setNote3(!note3)
    }
    function handleClick4() {
        setNote4(!note4)
    }
    function handleClick5() {
        setNote5(!note5)
    }
    function handleClick6() {
        setNote6(!note6)
    }
    function handleClick7() {
        setNote7(!note7)
    }
    function handleClick8() {
        setNote8(!note8)
    }
    function handleClick9() {
        setNote9(!note9)
    }
    function handleClick10() {
        setNote10(!note10)
    }
    function handleClick11() {
        setNote11(!note11)
    }
    function handleClick12() {
        setNote12(!note12)
    }
    function handleClick13() {
        setNote13(!note13)
    }
    function handleClick14() {
        setNote14(!note14)
    }
    function handleClick15() {
        setNote15(!note15)
    }
    function handleClick16() {
        setNote16(!note16)
    }
    return (
        <div>
            <button onClick={handleClick1} className={note1 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick2} className={note2 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick3} className={note3 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick4} className={note4 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick5} className={note5 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick6} className={note6 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick7} className={note7 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick8} className={note8 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick9} className={note9 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick10} className={note10 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick11} className={note11 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick12} className={note12 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick13} className={note13 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick14} className={note14 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick15} className={note15 ? 'offNote' : 'onNote'}></button>
            <button onClick={handleClick16} className={note16 ? 'offNote' : 'onNote'}></button>

        </div>
    )
}

export default Buttons
