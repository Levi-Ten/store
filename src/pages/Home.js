import React from "react";
import "./home.css";
import hero from "../imagesApp/hero-right.png";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__text">
          <div className="home__content">
            <p>In this season, find the best 🔥</p>
            <h1>Exclusive collection for everyone</h1>
            <p>
              Discover more. <span>Good things are waiting for you</span>
            </p>
          </div>
          <div className="ball__green ball"></div>
          <div className="ball__red ball"></div>
          <div className="ball__violet ball"></div>
        </div>
        <div className="home__image">
          <img src={hero} alt="Exclusive collection for everyone" />
        </div>
      </div>
    </div>
  );
}

export default Home;
