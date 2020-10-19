import React from "react";
import "./Header.css";
import logo from "./logo.svg"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={ logo } alt="Big Mac Exchange logo" />
        <h4>Big Mac Exchange</h4>
      </div>
    </header>
  );
}

export default Header;