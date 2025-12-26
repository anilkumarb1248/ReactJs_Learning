const { createStore } = require("redux");

// Action Constant to use from Anywhere
const BUY_CAKE = "BUY_CAKE";

// Action Object which should contain the type and optional payload.
// const action = {
//   type: BUY_CAKE,
//   payload: 2, // Number of cackes to buy can be passed as payload
// };

// Action Creator which returns the action object (from created action)
// function buyCake() {
//   return action;
// }

// Action Creator which returns the action object (new action)
function buyCake(quantity) {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
}

const initialState = {
  numberOfCakes: 10,
};

function cakeShopReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(cakeShopReducer);

console.log("State", store.getState());
// Subscribing to changes
const unsubscribeStoreUpdates = store.subscribe(() => {
  console.log("Store Updated: ", store.getState());
});

// Dispatching Actions
store.dispatch(buyCake(1));
console.log("After buying 1 cake", store.getState());
store.dispatch(buyCake(2));
console.log("After buying 2 cake", store.getState());

unsubscribeStoreUpdates();
