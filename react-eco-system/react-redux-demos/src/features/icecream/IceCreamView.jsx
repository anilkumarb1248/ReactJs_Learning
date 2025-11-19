
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"

function IceCreamView() {
    const numberOfIceCreams = useSelector((state) => state.icecream.numberOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2> *** Ice Cream Shelf *** </h2>
            <h3>Number of Ice Creams: {numberOfIceCreams} </h3>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Ice Creams</button>
        </div>
    )
}
export default IceCreamView;
