import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2>Home</h2>
      </Link>
      <br></br>
    </nav>
  );
};

export default Nav;