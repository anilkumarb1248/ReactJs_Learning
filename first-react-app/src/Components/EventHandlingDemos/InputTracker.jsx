
import React, {useState} from 'react'

function InputTracker() {

    const [text, setText] = useState('');

    // 'event' is the SyntheticEvent object
    const handleChange = (event) => {
        // event.target refers to the DOM element that fired the event (<input>)
        // event.target.value is the current value of the input field
        setText(event.target.value);
    };

    return (
        <div>
            {/* The onChange event fires every time the input value changes */}
            <input type="text" onChange={handleChange} placeholder="Type something..." />
            <p>Current Input: {text}</p>
        </div>
    )
}

export default InputTracker;
