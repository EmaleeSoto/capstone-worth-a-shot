import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const LandingPageSignedIn = ({ user }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);
  return (
    <div>
      <h1>Hi {loggedInUser.name}, what are your plans tonight?</h1>
      <break></break>
      <Link to={`/user/preferences`}>Find Clubs</Link>
      <br></br>
      <Link to="/alcohols">Find Drinks</Link>
    </div>
  );
};

export default LandingPageSignedIn;
