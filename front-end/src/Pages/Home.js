import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-subcontainer">
        <h1 className="home-header">This is Worth a Shot!</h1>
        <section className="home-text-container">
          <p className="home-text">
            Welcome to Worth a Shot, an app designed to help people explore one
            of the world's favorite pastimes.
          </p>
          <p className="home-text">
            With this tool, you'll be able to create an account, choose a
            preferred ambience, vibe, or scene, and we'll proide you with
            nightlife venues curated to your tastes. With our help, you'll have
            an easy time deciding the direction of your night out on the town
            (or day, should that be your energy!).
          </p>
        </section>
        <h1 className="home-tagline">Your ultimate nightlife guide!</h1>
        <Link to={`/sign-up`}>
          <button className="large-button">Let's get started!</button>
        </Link>
      </div>
      <img src="./images/splash.jpg" alt="Group of people partying" />
    </div>
  );
};

export default Home;
