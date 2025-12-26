// BindActionsCreator.js

const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKES = "RESTOCK_CAKES";

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

const store = createStore(cakeReducer);
const actions = bindActionCreators({ buyCake, restockCakes }, store.dispatch);

console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

actions.buyCake();
actions.buyCake(2);
actions.restockCakes(5);
unsubscribe();
