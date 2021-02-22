import React from 'react'
import './Nav.css'

const mode=()=>{
    document.body.classList.toggle('dark');
    }

const Change = () => {
    return (
        <button onClick={mode()}>Change Mode</button>
    )
}

export default Change