
import React, { useState } from 'react'

export default function PreviousStateCounterComp() {

    const [count, setCount] = useState(0);

    function increamentFive(){
        for(let i=0; i<5; i++){
            // setCount(count + 1);
            setCount(prevCount => prevCount + 1);
        }
    }
  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={increamentFive}>Increment Five </button>
    </div>
  )
}
