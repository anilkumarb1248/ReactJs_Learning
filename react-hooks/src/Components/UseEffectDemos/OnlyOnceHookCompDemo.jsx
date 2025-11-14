
import React, { useEffect, useState } from 'react'

export default function OnlyOnceHookCompDemo() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function logMousePosition(e) {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        // Setup code (e.g., adding listener)
        console.log("Use effect called")
        window.addEventListener('mousemove', logMousePosition);

        // Cleanup function is returned here
        return () => {
            console.log("Component Unmounting code");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
            <h3>useEffect - run only once </h3>
            <p>X : {x}, Y: {y}</p>
        </div>
    )
}
