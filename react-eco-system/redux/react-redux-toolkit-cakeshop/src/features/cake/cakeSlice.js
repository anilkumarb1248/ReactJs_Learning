import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      //   console.log("Order Received", state.numberOfCakes);
      state.numberOfCakes = state.numberOfCakes - action.payload;
      //   console.log("Order Completed", state.numberOfCakes);
    },
    restocked: (state, action) => {
      state.numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;
