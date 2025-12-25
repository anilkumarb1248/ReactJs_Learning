import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  const buttonClickHandler = () => {
    props.buyItem(1);
  };

  return (
    <div>
      <h2>
        Item: {props.item} - Count: {props.itemStateCount}
      </h2>
      <button onClick={buttonClickHandler}>Buy Item [{props.item}]</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  //   const itemState = ownProps.cake
  //     ? state.cake.numberOfCakes
  //     : state.iceCream.numberOfIceCreams;

  //   return {
  //     itemStateCount: itemState,
  //   };
  if (ownProps.cake) {
    return {
      itemStateCount: state.cake.numberOfCakes,
      item: "Cakes",
    };
  } else {
    return {
      itemStateCount: state.iceCream.numberOfIceCreams,
      item: "Ice Creams",
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? (quantity) => dispatch(buyCake(quantity))
    : (quantity) => dispatch(buyIceCream(quantity));
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
