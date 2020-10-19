import React from "react";

const State = React.createContext();
const Dispatch = React.createContext();

/* Our initial state */
let amount = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        amount: action.payload,
      }
    default:
      return state
  }
};

/* Set up our provider */
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { amount: amount });

  return (
    <State.Provider value={ state }>
      <Dispatch.Provider value={ dispatch }>{ children }</Dispatch.Provider>
    </State.Provider>
  )
};

export const Amount = {
  State,
  Dispatch,
  Provider,
};
