import React from 'react'
import './Nav.css'

const mode=()=>{
    document.body.classList.toggle('dark');
    }

const Change = () => {
    return (
        <button onClick={mode()}><span class="glyphicon glyphicon-adjust"></span></button>
    )
}

export default Change