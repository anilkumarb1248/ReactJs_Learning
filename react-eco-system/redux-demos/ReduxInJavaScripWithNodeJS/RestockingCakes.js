// Run this command "node CakeShopeApp.js" by entering into the folder

//import redux from 'redux' //ES6 import syntax, If it is react application
// If it is simple node js application, use require() to import.
const { createStore } = require("redux");
// const redux = require('redux')
// const createStore = redux.createStore

// Action Constant to use from Anywhere
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKES = "RESTOCK_CAKES";

// *************** Creating an Action with Action Creator ***************
function buyCake(quantity = 1) {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
}

function restockCakes(quantity = 3) {
  return {
    type: RESTOCK_CAKES,
    payload: quantity,
  };
}

// *************** Creating a Reducer with initial state (Object - Single source of truth) ***************
// -  Initial state would be the store of the cake shop application
const initialState = {
  numberOfCakes: 10,
};

function cakeReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

// **************** Creating the Store using Redux createStore() ********************
// Redux takes the reducer to update the state.
const cakeShopStore = createStore(cakeReducer);
console.log("Initial State: ", cakeShopStore.getState());
const unsubscribe = cakeShopStore.subscribe(() => {
  console.log("Updated State: ", cakeShopStore.getState());
});

cakeShopStore.dispatch(buyCake()); // It takes default value 1, if we don't pass the quantity
cakeShopStore.dispatch(buyCake(2));

// Restocking cakes in the morning
console.log("Cakes before restocking", cakeShopStore.getState());
cakeShopStore.dispatch(restockCakes(5));
console.log("Cakes after restocking", cakeShopStore.getState());

unsubscribe();
