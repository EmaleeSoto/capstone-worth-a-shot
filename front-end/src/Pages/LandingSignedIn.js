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
            src="https://us.123rf.com/450wm/miny/miny1208/miny120800017/14969245-des-gens-qui-dansent-lors-d-une-f%C3%AAte.jpg"
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
          <Link to="/alcohols/category">
            <button className="large-button">Find Drinks</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSignedIn;
