import { useState } from "react";
import Child from "./Child";
import CounterButton from "../PropsDemos/CounterButton";

const Parent = ()=>{

    const showMessage = ()=>{
        alert("Hello From Parent!")
    }

    const handleGreet = (name)=>{
        alert(`Hello ${name}, Good Morning`)
    }

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }

    return(
        <>
            <h2>Hello from Parent</h2>
            <h3>Count: {count} </h3>
            {/* <Child onButtonClick={showMessage} onGreet={handleGreet}/> */}
            <CounterButton onIncreament={increaseCount}/>
        </>
    )
}

export default Parent;