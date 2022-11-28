import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Nav = ({ signOutOfAccount, loggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2>Home</h2>
      </Link>

      <br></br>
      <Link className="nav-link" to="/About">
        About
      </Link>
      {loggedIn ? (
        <div id="login-wrapper">
          <Link className="nav-link" to="/user/favorties">
            Favorites
          </Link>
          <button
            className="tab"
            id="logout"
            onClick={() => {
              signOutOfAccount();
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="tab" id="login-wrapper">
          <Link to="/sign-in" id="sign-in">
            <button>
              <span>Login</span>
            </button>
          </Link>
          <Link to="/sign-up" id="sign-up">
            <button>
              <span>Sign Up!</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
