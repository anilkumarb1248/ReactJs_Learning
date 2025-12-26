import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux";

function PayloadCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  const buttonClickHandler = () => {
    dispatch(buyCake(number));
  };

  return (
    <div>
      <h3>Number of Cakes with Payload : {numberOfCakes} </h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={buttonClickHandler}>Buy Cake</button>
    </div>
  );
}
export default PayloadCakeContainer;
