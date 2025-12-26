import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cake Store </h3>
      <h2>Number of cakes: {numberOfCakes} </h2>
      <button onClick={() => dispatch(ordered(1))}>Order</button>
      <button onClick={() => dispatch(restocked(5))}>Restock</button>
    </div>
  );
}

export default CakeView;
