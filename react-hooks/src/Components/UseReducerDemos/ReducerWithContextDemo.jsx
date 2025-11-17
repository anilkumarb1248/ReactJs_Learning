
import React, { useReducer } from 'react'
import ComponentA from './ChildComponents/ComponentA'
import ComponentB from './ChildComponents/ComponentB'
import ComponentC from './ChildComponents/ComponentC'

export const CountContext = React.createContext();

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

function ReducerWithContextDemo() {

    const [count, disapatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <p>Count: {count} </p>
            <CountContext.Provider value={{ countState: count, countDispatch: disapatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>

        </div>
    )
}

export default ReducerWithContextDemo;
