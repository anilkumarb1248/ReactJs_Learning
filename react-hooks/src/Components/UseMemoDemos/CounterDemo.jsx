
import React, { useMemo, useState } from 'react'

function CounterDemo() {
    const [fristCounter, setFirstCounter] = useState(0)
    const [secondCounter, setSecondCounter] = useState(0)

    const incrementFirstCounter = () => {
        setFirstCounter(fristCounter => fristCounter + 1);
    }
    const incrementSecondCounter = () => {
        setSecondCounter(secondCounter => secondCounter + 1);
    }

    const isEven = useMemo(() => {
        console.log("Finding firstCounter is even or odd");
        let i = 0;
        while (i <= 2000000000) i++
        return fristCounter % 2 == 0
    }, [fristCounter])

    return (
        <div>
            <div>
                <button onClick={incrementFirstCounter}>First Counter: {fristCounter} </button>
                <span> {isEven ? 'Even' : 'Odd'} </span>
            </div>
            <div>
                <button onClick={incrementSecondCounter}>Second Counter: {secondCounter} </button>
            </div>
        </div>
    )
}

export default CounterDemo;
