
import React, { useState } from 'react'

// In this example, the text state variable holds a string. 
// When you type, handleChange reads the latest input value from the browser input DOM element, 
// and calls setText to update the state. This allows you to display the current text below.
export default function InputTextComp() {

    const [text, setText] = useState('Hello');

    function handleInputChange(e){
       setText(e.target.value);
    }

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={text}/>
      <h3>You typed: {text} </h3>
      <button onClick={() => setText('Hello')}> Reset </button>
    </div>
  )
}
