import React from "react";
import { Link } from "react-router-dom";
import "./LandingSignedIn.css";

const LandingPageSignedIn = ({ user }) => {
  return (
    <div className="landing-container">
      <h1>Hi {user.name}, what are your plans tonight?</h1>
      <div className="image-container">
        <div>
          <Link to={`/establishments`}>
            <img src="./images/find-bars.png" alt="Find Bars and Clubs" />
          </Link>
          <br></br>
          <Link to={`/establishments`}>
            <button className="large-button">Find Bars and Clubs</button>
          </Link>
        </div>
        <div>
          <Link to="/alcohols/category">
            <img src="./images/find-drinks.png" alt="Find Drinks" />
          </Link>
          <br></br>
          {user.age < 21 ? (
            <h2>
              Sorry, the legal drinking age in the US is 21. Come back soon!
            </h2>
          ) : (
            <Link to="/alcohols/category">
              <button className="large-button">Find Drinks</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPageSignedIn;
