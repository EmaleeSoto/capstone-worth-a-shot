import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Nav = ({ signOutOfAccount, loggedIn, userVerified }) => {
  const navigate = useNavigate();
  return (
    <nav className="nav header" id={loggedIn && "nav-loggedin"}>
      <Link className="nav-link" to={loggedIn ? "/myhome" : "/"}>
        <div>
          <img
            className="nav-logo"
            alt="Worth a Shot logo"
            src={require("../images/navlogo.png")}
          />
        </div>
      </Link>
      <div className="about-link">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
      <div className="trending-link">
        <Link className="nav-link" to="/trending">
          Trending in NYC
        </Link>
      </div>

      <Link className={loggedIn ? "show nav-link" : "hide"} to="/myfavorites">
        Favorites
      </Link>
      <Link className={loggedIn ? "show nav-link" : "hide"} to="/editprofile">
        My Profile
        {loggedIn && !userVerified ? "❗" : null}
      </Link>
      <button
        className={loggedIn ? "show tab" : "hide"}
        id="logout"
        onClick={() => {
          signOutOfAccount();
          navigate("/");
        }}
      >
        Log out
      </button>

      <div className={loggedIn ? "hide" : "show tab"} id="login-wrapper">
        <Link to="/sign-in" id="sign-in">
          <button>
            <span>Log in</span>
          </button>
        </Link>
        <Link to="/sign-up" id="sign-up">
          <button>
            <span>Sign up</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
