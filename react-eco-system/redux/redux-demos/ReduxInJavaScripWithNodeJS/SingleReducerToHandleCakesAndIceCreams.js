// Run this command "node SingleReducerToHandleCakesAndIceCreams.js" by entering into the folder

// const { createStore } = require("redux");
const redux = require("redux");
const createStore = redux.createStore;

// Action Constants to use from Anywhere
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKES = "RESTOCK_CAKES";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";
const RESTOCK_ICE_CREAMS = "RESTOCK_ICE_CREAMS";

// *************** Creating an Action with Action Creator ***************
function buyCake(quantity = 1) {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
}

function restockCakes(quantity = 1) {
  return {
    type: RESTOCK_CAKES,
    payload: quantity,
  };
}

function buyIceCream(quantity = 1) {
  return {
    type: BUY_ICE_CREAM,
    payload: quantity,
  };
}

function restockIceCreams(quantity = 1) {
  return {
    type: RESTOCK_ICE_CREAMS,
    payload: quantity,
  };
}

//Initial state
const initialState = {
  numberOfCakes: 10,
  numberOfIceCreams: 20,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case RESTOCK_CAKES:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    case RESTOCK_ICE_CREAMS:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
}

// **************** Creating the Store using Redux createStore() ********************
// Redux takes the reducer to update the state.
const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake(2));
store.dispatch(restockCakes(5));

store.dispatch(buyIceCream());
store.dispatch(buyIceCream(2));
store.dispatch(restockIceCreams(5));

unsubscribe();
