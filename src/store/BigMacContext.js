import React from "react";

const State = React.createContext();
const Dispatch = React.createContext();

let data = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
};

/* Set up our provider */
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { data: data });

  return (
    <State.Provider value={ state }>
      <Dispatch.Provider value={ dispatch }>{ children }</Dispatch.Provider>
    </State.Provider>
  )
};

export const BigMac = {
  State,
  Dispatch,
  Provider,
};
