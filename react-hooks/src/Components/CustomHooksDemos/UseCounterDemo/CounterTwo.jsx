
import React, { useState } from 'react'
import useCounter from './useCounter';

function CounterTwo() {
    
    const [count, increment, decrement, reset] = useCounter(10, 5);

    return (
        <div>
            Counter Two: {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterTwo;
