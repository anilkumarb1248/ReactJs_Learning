import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCakes } from "../../redux";

function LayoutCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  const buyButtonClickHandler = () => {
    dispatch(buyCake(number));
  };

  const restockButtonClickHandler = () => {
    dispatch(restockCakes(number));
  };

  return (
    <div>
      <h3>Available Cakes Count : {numberOfCakes} </h3>
      <div>
        <label htmlFor="quantity">
          <b>Quantity: </b>
        </label>
        <input
          type="text"
          id="quantity"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={buyButtonClickHandler}>Buy Cake's</button>
        <button onClick={restockButtonClickHandler}>Restock Cake's</button>
      </div>
    </div>
  );
}

export default LayoutCakeContainer;
