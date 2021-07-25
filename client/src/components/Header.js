import React, { useEffect } from "react";
import logo from "../assets/images/rg-io-logo.svg";

export default function Header() {
  useEffect(() => {
    const nav = document.querySelector("#navigation");
    const openClose = document.querySelector("#navigation .open-close");

    openClose.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }, []);

  return (
    <header id="header">
      <div className="logo">
        <a className="mark" href="/">
          <img src={logo} alt="RG"></img>
        </a>
        <h3 className="name">Robert Gonzalez</h3>
      </div>

      <nav id="navigation">
        <button className="open-close">
          <span></span>
          <span></span>
        </button>

        <ul id="main-menu">
          <li className="menu-link"></li>
        </ul>
      </nav>
    </header>
  );
}
