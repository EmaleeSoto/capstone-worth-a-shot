import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2>Home</h2>
      </Link>
      <br></br>
      <Link className="nav-link" to ="/about">About</Link>
      <br></br>
      <Link className='nav-link' to="/user/favorties">Favorites</Link>
      <br></br>
      <button>Log Out</button>
    </nav>
  );
};

export default Nav;