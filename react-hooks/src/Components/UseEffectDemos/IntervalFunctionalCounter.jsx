
import React, { useEffect, useState } from 'react'

export default function IntervalFunctionalCounter() {
    const [count, setCount] = useState(0);

const tick = () => {
    // setCount(count + 1);
    setCount(preValue => preValue + 1);
}

    useEffect(() => {
        console.log("useEffect is called");
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    // }, [count]); // This will call the useEffect() every time the count value changes.


    return (
        <div>
            <h3>Functional Counter: {count} </h3>
        </div>
    )
}
