import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Nav = ({ signOutOfAccount, loggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav className="nav header">
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
        <Link className="trending-link" to="/trending">
          Trending
        </Link>
      </div>
      {loggedIn ? (
        <div id="login-wrapper">
          <Link className="nav-link" to="/myfavorites">
            Favorites
          </Link>
          <Link className="nav-link" to="/editprofile">
            My Profile
          </Link>
          <button
            className="tab"
            id="logout"
            onClick={() => {
              signOutOfAccount();
              navigate("/");
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="tab" id="login-wrapper">
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
      )}
    </nav>
  );
};

export default Nav;
