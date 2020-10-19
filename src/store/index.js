import React from "react";
import { Amount } from "./AmountContext";
import { BigMac } from "./BigMacContext";
import { Router } from "./RouterContext";
import { User } from "./UserContext";

/* TODO: Create a factory to reduce the boilerplate for these contexts */

const providers = [
  <Amount.Provider />,
  <BigMac.Provider />,
  <Router.Provider />,
  <User.Provider />
];

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, { children }),
    initial
  );

export { 
  Store,
  Amount,
  BigMac,
  Router,
  User
};