

import React, { useState } from 'react'

function FunctionButtonClickEvent() {

    const [message, setMessage] = useState("Button not clicked yet!")

    // const  handleButtonClick = () =>{
    //     setMessage("Hurray, Button Clicked!")
    // }

    const  handleButtonClick = (event) =>{
        console.log('Synthetic Event:', event); // React SyntheticEvent
        console.log('Native Event:', event.nativeEvent); // Native DOM Event
    }

  return (
    <div>
        <p>Message: {message} </p>
        {/* Attach the handler using the onClick prop */}
        <button onClick={handleButtonClick}> Click Me </button>
      
    </div>
  )
}

export default FunctionButtonClickEvent;
