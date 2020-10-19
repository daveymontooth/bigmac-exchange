import React from "react";

/* Set up state and dispatch functionality */
const State = React.createContext();
const Dispatch = React.createContext();

/* Set up our state reducer */
const reducer = (state, action) => {
  switch (action.type) {
    case "route":
      return {
        ...state,
        route: action.payload,
      }
    default:
      return state
  }
};

/* Set up our provider */
const Provider = ({ children }) => {
  /* Set up our initial state with home as the default route */
  const [state, dispatch] = React.useReducer(reducer, { route: "home" })

  return (
    <State.Provider value={ state }>
      <Dispatch.Provider value={ dispatch }>{ children }</Dispatch.Provider>
    </State.Provider>
  )
};

export const Router = {
  State,
  Dispatch,
  Provider,
};
