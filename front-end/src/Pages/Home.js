import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-header">This is Worth a Shot!</h1>
      <p className="home-text">
        Welcome to Worth a Shot, an app designed to help the user interact with
        their peers through one of the world's favorite pastimes.
      </p>
      <p className="home-text">
        With this tool, the User will be able to create an account, choose a
        preferred ambience, vibe, or scene, and be given locations in their area
        which fit the requirements. Similar establishments will be curated and
        presented to the User as well, allowing them more control over the
        direction of their night {"(or Day, should that be your energy!)"}.
      </p>
      <h3>Your ultimate nightlife guide!</h3>
      <break></break>
      <button>Let's Get Started!</button>
    </div>
  );
};

export default Home;
