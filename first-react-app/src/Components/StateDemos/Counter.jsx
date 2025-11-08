import { useState } from "react";


function Counter(){

    const [count, setCount] = useState(0) // initialize state

    return(
        <>
            <h3> Count: {count} </h3>
            <button onClick={() => setCount(count+1)}> Increament </button>
        </>
    )
}

export default Counter;