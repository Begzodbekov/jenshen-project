import React from "react";
import "./Hero.scss";
import heroRight from '../../img/hero__right.png'
function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__left">
            <span>
              <h3>100% tabiiy</h3>
            </span>
            <h2>Koreya qizil jenshen ichimligi</h2>
            <button className="hero__order">BUYURTMA BERISH</button>
          </div>
          <div className="hero__right">
              <img src={heroRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
