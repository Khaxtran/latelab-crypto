import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Squares from "./components/Squares/Squares";
import Circles from "./components/Circles/Circles";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section className="hero hero-container">
        <div className="hero-body has-text-centered">
          <div className="title-container">
            <h1 className="big-title">
              The best way to <span className="custom-color-cyan">buy</span> and{" "}
              <span className="custom-color-yellow">sell</span> <span className="special-text"> crypto <Circles /> </span>
            </h1>
            <p className="description">
              Earn up to 21% in rewards annually by staking your assets with
              Latelab_.
            </p>
          </div>

          <div className="button-container">
            <button className="button is-black is-rounded is-medium my-6">
              <p className="btn-text">Get started</p>
            </button>
          </div>
        </div>

        <div className="abstracts-illustration">
          <Squares />
        </div>
      </section>
    </div>
  );
}

export default App;
