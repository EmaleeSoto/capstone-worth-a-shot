import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import axios from "axios";
import "./UserSignIn.css";
const API = process.env.REACT_APP_API_URL;

export default function UserSignIn({ resetPassword }) {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        // Action when user is signed in
        const user = userCredential.user;
        if (user) {
          //get firebase id
          alert("Welcome back! You're now logged in!");
          // Navigates to a USER Splash Page (this should be personal to each user)
          navigate("/myhome");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        alert(errorCode);
      });
  };
  return (
    <div className="sign-in-section">
      <div className="sign-in-section-container">
        <h1 className="login-header">Let's get you logged in.</h1>
        <div className="input-label-wrap">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="user@example.com"
            onChange={handleTextChange}
            autoComplete="off"
            required
          />
        </div>
        <br></br>
        <div className="input-label-wrap">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleTextChange}
            autoComplete="off"
            required
          />
        </div>
        <br></br>
        <button id="login" onClick={signIn}>
          Log in
        </button>
        <h4 id="forgot-password" onClick={resetPassword}>
          Forgot Password?
        </h4>
      </div>
    </div>
  );
}
