import { BUY_CAKE, RESTOCK_CAKES } from "./cakeTypes";

export const buyCake = (quantity) => {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};

export const restockCakes = (quantity) => {
  return {
    type: RESTOCK_CAKES,
    payload: quantity,
  };
};
