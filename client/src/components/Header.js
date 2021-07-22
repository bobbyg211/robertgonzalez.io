import React from "react";
import logo from "../assets/images/rg-io-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="RG"></img>
      <h3 className="logo_text">Robert Gonzalez</h3>
    </header>
  );
}
