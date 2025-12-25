import { BUY_ICE_CREAM, RESTOCK_ICE_CREAMS } from "./iceCreamTypes";

export const buyIceCream = (quantity = 1) => {
  return {
    type: BUY_ICE_CREAM,
    payload: quantity,
  };
};

export const restockIceCreams = (quantity = 1) => {
  return {
    type: RESTOCK_ICE_CREAMS,
    payload: quantity,
  };
};
