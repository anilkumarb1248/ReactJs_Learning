// Run this command "node MultipleReducersToHandleCakesAndIceCreams.js" by entering into the folder

// const { createStore } = require("redux");
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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

// Initial states
const initialCakesState = {
  numberOfCakes: 10,
};

const initialIceCreamsState = {
  numberOfIceCreams: 20,
};

function cakeReducer(state = initialCakesState, action) {
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

function iceCreamReducer(state = initialIceCreamsState, action) {
  switch (action.type) {
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

// Creating a root reducer with combineReducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// **************** Creating the Store using Redux createStore() ********************
const store = createStore(rootReducer);
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

// To get cakes state
console.log("----------------------");
console.log("Number of Cakes: ", store.getState().cake.numberOfCakes);
// To get ice creams state
console.log(
  "Number of Ice Creams: ",
  store.getState().iceCream.numberOfIceCreams
);

unsubscribe();
