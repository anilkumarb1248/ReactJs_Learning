import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numberOfIceCreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCreams = state.numberOfIceCreams - action.payload;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams = state.numberOfIceCreams + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numberOfIceCreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
