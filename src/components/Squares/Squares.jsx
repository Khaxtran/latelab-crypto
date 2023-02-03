import React from "react";
import "./Squares.css";

export default function Squares() {
  return (
    <div className="squares-container">
      <div>
        <figure className="image-container">
          <img className="image shiny-cyan" src="assets/shiny-cyan.png" />
        </figure>
      </div>
      <div className="line">
        <div className="is-flex">
          <div className="square"></div>
          <div className="circle-container">
            <div className="big-circle has-background-black"></div>
          </div>
        </div>

        <div className="square has-background-cyan"></div>
      </div>
      <div className="line">
        <div className="is-flex">
          <div className="square"></div>
          <div className="square has-background-black"></div>
          <div className="square"></div>
        </div>

        <div className="is-flex">
          <div>
            <figure className="image-container">
              <img
                className="image shiny-yellow"
                src="assets/shiny-yellow.png"
              />
            </figure>
          </div>
          <div className="square"></div>
          <div className="square has-background-black"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="line">
        <div className="is-flex">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square has-background-gold"></div>
        </div>

        <div className="is-flex">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>

      <div className="floating-image left">
        <figure className="image-frame">
          <img
            className="image left"
            src="assets/dollar-coin.png"
            alt="floating-image"
          />
        </figure>
      </div>

      <div className="floating-image right">
        <figure className="image-frame right">
          <img
            className="image right"
            src="assets/cryptocurrency-wallet.png"
            alt="floating-image"
          />
        </figure>
      </div>
    </div>
  );
}
