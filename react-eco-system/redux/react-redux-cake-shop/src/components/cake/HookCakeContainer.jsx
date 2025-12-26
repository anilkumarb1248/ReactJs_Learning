import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux";

function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
      dispatch(buyCake(1))
    }

  return (
    <div>
      <h3>Number of Cakes with Hooks : {numberOfCakes} </h3>
      <button onClick={buttonClickHandler}>Buy Cake</button>
    </div>
  );
}
export default HookCakeContainer;


