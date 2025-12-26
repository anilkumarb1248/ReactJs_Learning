import React from "react";
// import { buyCake } from "../../redux/cake/cakeActions";
import { buyCake } from "../../redux";
import { connect } from "react-redux";


function CakeContainer(props) {

  const buttonClickHandler = () => {
    props.buyCake(1)
  }
  return (
    <div>
      <h3>Number of Cakes: {props.numberOfCakes} </h3>
      <button onClick={buttonClickHandler}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
