const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Cake Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();
store.dispatch(cakeActions.ordered());
console.log("Updated State after unsubscribe: ", store.getState());
