import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream, restockIceCreams } from "../../redux";

function LayoutIceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  const buyButtonClickHandler = () => {
    dispatch(buyIceCream(number));
  };

  const restockButtonClickHandler = () => {
    dispatch(restockIceCreams(number));
  };

  return (
    <div>
      <h3>Available IceCreams Count: {numberOfIceCreams}</h3>
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
        <button onClick={buyButtonClickHandler}>Buy Ice Cream's</button>
        <button onClick={restockButtonClickHandler}>Restock Ice Cream's</button>
      </div>
    </div>
  );
}

export default LayoutIceCreamContainer;
