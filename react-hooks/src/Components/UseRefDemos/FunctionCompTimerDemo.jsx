
import React, { useEffect, useState, useRef } from 'react'

function FunctionCompTimerDemo() {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000)
        return () => {
            clearInterval(timerRef.current);
        }
    }, [])

    return (
        <div>
            Functional Timer: {timer}
            {/* <button onClick={() => clearInterval(interval)}>Clear Interval</button> */}
            {/* Uncaught ReferenceError: interval is not defined */}
            <button onClick={() => clearInterval(timerRef.current)}>Clear Interval</button>
        </div>
    )
}
export default FunctionCompTimerDemo;
