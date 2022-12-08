import React from "react";
import { Link } from "react-router-dom";
import "./LandingSignedIn.css";

const LandingPageSignedIn = ({ user }) => {
  return (
    <div className="landing-container">
      <h1>Hi {user.name}, what are your plans tonight?</h1>
      <div className="image-container">
        <div>
          <img
            src="https://i.pinimg.com/originals/d3/00/bf/d300bfa12c36a34ac511c27e44541b88.png"
            alt="clubs and bars"
          />
          <br></br>
          <Link to={`/establishments`}>
            <button className="large-button">Find Bars and Clubs</button>
          </Link>
        </div>
        <div>
          <img
            src="https://www.highsnobiety.com/static-assets/thumbor/sVG5ts9WDJHTXFwcHlXpOjMhgsY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2017/07/18125519/guide-to-daydrinking-3.jpg"
            alt="alcohols"
          />
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
