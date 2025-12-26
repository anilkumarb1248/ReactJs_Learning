const store = require("./app/store");
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Cake Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(3));

unsubscribe();
store.dispatch(icecreamActions.ordered());
console.log("Updated State after unsubscribe: ", store.getState());
