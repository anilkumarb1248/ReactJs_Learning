import React, { createContext, useReducer } from "react";

const initialState = 0;
const counterReducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      currentState;
  }
};

export const CounterContext = createContext({
  count: 0,
  updateCounter: () => {},
});

export default function CounterContextProvider({ children }) {
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  const contextValue = {
    count: counter,
    updateCounter: dispatch,
  };
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}
