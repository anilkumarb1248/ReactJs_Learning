import React, { useContext } from 'react'
import { CountContext } from '../ReducerWithContextDemo';

function ComponentF() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <span>
                <b>Compnoent F  ({countContext.countState}) </b>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </span>
        </div>
    )
}

export default ComponentF
