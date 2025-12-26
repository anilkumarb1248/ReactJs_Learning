// node NeedOfImmerLibrary.js
// Handling user state

const redux = require("redux");

const UPDATE_STREET = "UPDATE_STREET";

function updateStreet(newStreet) {
  return {
    type: UPDATE_STREET,
    payload: newStreet,
  };
}

const userInitialState = {
  name: "Anil",
  email: "anil@gmail.com",
  address: {
    street: "Indresham",
    district: "Patancheru",
    city: "Hyderabad",
    state: "Telangana",
  },
};

function reducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
console.log("User initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated user state: ", store.getState());
});
store.dispatch(updateStreet("Rameshwaram Banda"));
unsubscribe();
