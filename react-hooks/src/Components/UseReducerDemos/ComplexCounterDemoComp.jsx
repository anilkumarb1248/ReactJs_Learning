
import React, { useReducer } from 'react'

const initialValue = {
    firstCounter: 0,
    secondCounter: 0
}
// action = {type : 'increment/decrement', value: 5}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - + action.value };
        case 'increment5':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement5':
            return { ...state, firstCounter: state.firstCounter - + action.value };
        case 'incrementCount2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrementCount2':
            return { ...state, secondCounter: state.secondCounter - + action.value };
        case 'reset':
            return initialValue;
        default:
            return state;
    }
}

function ComplexCounterDemoComp() {
    const [count, disapatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <h3> First Counter: {count.firstCounter} </h3>
            <h3> Second Counter: {count.secondCounter} </h3>
            <button onClick={() => disapatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => disapatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => disapatch({ type: 'increment5', value: 5 })}>Increment 5</button>
            <button onClick={() => disapatch({ type: 'decrement5', value: 5 })}>Decrement 5</button>

            <div>
                <button onClick={() => disapatch({ type: 'incrementCount2', value: 1 })}>Increment Second Counter</button>
                <button onClick={() => disapatch({ type: 'decrementCount2', value: 1 })}>Decrement Second Counter</button>
            </div>

            <button onClick={() => disapatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default ComplexCounterDemoComp;
