import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IceCreamView() {
  const numberOfIceCreams = useSelector(
    (state) => state.icecream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h3>IceCream Store </h3>
      <h2>Number of cakes: {numberOfIceCreams} </h2>
      <button onClick={() => dispatch(ordered(1))}>Order</button>
      <button onClick={() => dispatch(restocked(5))}>Restock</button>
    </div>
  );
}

export default IceCreamView;
