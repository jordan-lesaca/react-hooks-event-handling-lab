// Code Keypad Component Here
import React from "react"

function Keypad(){
    function keyEntering(e){
        console.log('Entering password...')
    }
    return <input type="password" onChange={keyEntering}/>
}

export default Keypad