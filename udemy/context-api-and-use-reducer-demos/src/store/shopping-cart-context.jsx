import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../components/UdemyDemos/dummy-products";

//shopping-cart-context - Fast refresh only works when a file only exports components.
// Move your React context(s) to a separate file.

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemsQuantity: () => {},
});

const shoppingCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload,
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload,
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};

const initalState = {
  items: [],
};

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initalState,
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }
  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }
  const contextValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemsQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
