import React from "react";

const State = React.createContext();
const Dispatch = React.createContext();

/* Our initial user state */
const user = {
  ip: "",
  country: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
};

/* Set up our provider */
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { user: user });

  return (
    <State.Provider value={ state }>
      <Dispatch.Provider value={ dispatch }>{ children }</Dispatch.Provider>
    </State.Provider>
  )
};

export const User = {
  State,
  Dispatch,
  Provider,
};
