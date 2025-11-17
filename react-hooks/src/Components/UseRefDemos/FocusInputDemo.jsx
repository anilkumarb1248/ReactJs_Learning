
import React, { useEffect, useRef } from 'react'

function FocusInputDemo() {
    // 1. Initialize the Ref: `inputRef.current` is initially null
    const inputRef = useRef(null)

    useEffect(() => {
        // 4. Access and Manipulate: This runs after the component renders
    // Check if the DOM element is attached
        if (inputRef.current) {
            // Use the DOM method `focus()` on the input element
            inputRef.current.focus();
        }
    }, []) // Empty dependency array ensures it only runs once after mount

    return (
        <div>
            {/* 3. Attach the Ref: React links `inputRef.current` to this DOM element */}
            <input ref={inputRef} type="text" />
        </div>
    )
}
export default FocusInputDemo;
