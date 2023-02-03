import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState();

  function toggleBurgerMenu() {
    setIsActive(!isActive);
  }

  return (
    <nav className="navbar custom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <div className="circles-logo-container">
            <div className="circle-logo one"></div>
            <div className="circle-logo two"></div>
            <div className="circle-logo three"></div>
          </div>
          <p className="text-logo">LATE LAB_</p>
        </a>
        

        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu alignment ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">Exchange</a>
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Wallet</a>
          <a className="navbar-item">FAG</a>
          <a className="navbar-item">Eng</a>
        </div>

        <div className="navbar-end alignment">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-rounded is-outlined">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
