import React from "react";
import { Link } from "react-router-dom";
const LandingPageSignedIn = ({ user }) => {
  return (
    <div>
      <h1>Hi {user.name}, what are your plans tonight?</h1>
      <break></break>
      <Link to="/user/:id/preferences">Find Clubs</Link>
      <br></br>
      <Link to="/alcohols">Find Drinks</Link>
    </div>
  );
};

export default LandingPageSignedIn;
