import { BUY_ICE_CREAM, RESTOCK_ICE_CREAMS } from "./iceCreamTypes";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
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
};

export default iceCreamReducer;
