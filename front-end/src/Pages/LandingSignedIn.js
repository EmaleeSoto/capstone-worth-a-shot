import React from 'react';
import { Link } from 'react-router-dom';
import './LandingSignedIn.css';

const LandingPageSignedIn = ({ user }) => {
  return (
    <div className="landing-container">
      <h1>Hi {user.name}, what are your plans tonight?</h1>
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
