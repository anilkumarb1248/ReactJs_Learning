
import React, { useEffect, useState } from 'react'

export default function ConditionalHookCounterDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("UseEffect - Updating document title")
        document.title = `Clicked ${count} times`;
    }, [count])

    return (
        <div>
            <p> Hook Counter</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times </button>
        </div>
    )
}
