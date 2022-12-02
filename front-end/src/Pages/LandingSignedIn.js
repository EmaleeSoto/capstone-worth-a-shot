import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingSignedIn.css";

const LandingPageSignedIn = ({ user }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);
  return (
    <div className="landing-container">
      <h1>Hi {loggedInUser.name}, what are your plans tonight?</h1>
      <Link to={`/establishments`}>
        <button className="large-button">Find Clubs</button>
      </Link>
      <br />
      <Link to="/alcohols/category">
        <button className="large-button">Find Drinks</button>
      </Link>
    </div>
  );
};

export default LandingPageSignedIn;
