import React, { useState } from 'react'

function CounterFunctionComp() {

    const [count, setCount] = useState(0)

    const icreamentCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Functional Comp Count: {count} </button> */}
            <button onClick={icreamentCount}>Functional Comp Count: {count} </button>
        </div>
    )
}

export default CounterFunctionComp;




