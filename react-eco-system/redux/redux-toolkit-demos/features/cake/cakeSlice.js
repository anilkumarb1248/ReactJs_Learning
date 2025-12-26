//We cannot use ES module imports and still have to rely on the required keyword
// as we are in the node.js environment not in react env.
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  // initialState: initialState,
  initialState, // ES6 short hand if both key & value are the same.
  reducers: {
    ordered: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
module.exports = cakeSlice.reducer; // Defulat export
module.exports.cakeActions = cakeSlice.actions; // Named Export
