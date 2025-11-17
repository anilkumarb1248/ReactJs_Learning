
import React, { useState } from 'react'

function useCounter(initialValue = 0, stepValue) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + stepValue);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - stepValue);
    }
    const reset = () => {
        setCount(initialValue);
    }
    return [count, increment, decrement, reset];
}

export default useCounter;
