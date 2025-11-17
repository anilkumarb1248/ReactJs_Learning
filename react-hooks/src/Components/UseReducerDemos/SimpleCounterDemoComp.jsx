
import React, { useReducer } from 'react'

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialValue;
        default:
            return state;
    }
}

function SimpleCounterDemoComp() {
    const [count, disapatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <h3> Count: {count} </h3>
            <button onClick={() => disapatch('increment')}>Increment</button>
            <button onClick={() => disapatch('decrement')}>Decrement</button>
            <button onClick={() => disapatch('reset')}>Reset</button>

        </div>
    )
}
export default SimpleCounterDemoComp;
