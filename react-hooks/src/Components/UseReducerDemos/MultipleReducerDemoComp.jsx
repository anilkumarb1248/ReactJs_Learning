
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

function MultipleReducerDemoComp() {
    const [countOne, disapatchOne] = useReducer(reducer, initialValue);
    const [countTwo, disapatchTwo] = useReducer(reducer, initialValue);

    return (
        <div>
            <h3> Count One : {countOne} </h3>
            <button onClick={() => disapatchOne('increment')}>Increment</button>
            <button onClick={() => disapatchOne('decrement')}>Decrement</button>
            <button onClick={() => disapatchOne('reset')}>Reset</button>

            <h3> Count Two : {countTwo} </h3>
            <button onClick={() => disapatchTwo('increment')}>Increment</button>
            <button onClick={() => disapatchTwo('decrement')}>Decrement</button>
            <button onClick={() => disapatchTwo('reset')}>Reset</button>
        </div>
    )
}
export default MultipleReducerDemoComp;
