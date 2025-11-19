
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {ordered, restocked} from "./cakeSlice"

function CakeView() {
    
    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
    const dispatch = useDispatch()
    const [restockCount, setRestockCount] = useState(1)

  return (
    <div>
        <h2> *** Cake Shelf *** </h2>
        <h3>Number of cakes: {numberOfCakes} </h3>
        <button onClick={()=> dispatch(ordered())}>Order Cake</button>
        {/* <button onClick={()=> dispatch(restocked(3))}>Restock Cakes</button> */}
        <button onClick={()=> dispatch(restocked(restockCount))}>Restock Cakes</button>
        <input type="number" value={restockCount} onChange={(e)=> setRestockCount(parseInt(e.target.value))}/>
    </div>
  )
}
export default CakeView;
