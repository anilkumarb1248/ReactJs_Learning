
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../../redux';

function IceCreamContainer() {
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch();
  
    
    const buttonClickHandler = () => {
          dispatch(buyIceCream(1));
        }
    
      return (
        <div>
          <h3>Number of IceCream with Hooks : {numberOfIceCreams} </h3>
          <button onClick={buttonClickHandler}>Buy IceCream</button>
        </div>
      );
}

export default IceCreamContainer
