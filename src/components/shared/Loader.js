import React from "react";
import "./Shared.css";

const Loader = ({ message })  => {
  return (
    <div className="loader">{ message }</div>
  );
};

export default Loader;