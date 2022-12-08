import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import "./UserSignUp.css";

export default function SignUp() {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          alert(
            "Welcome to Worth a Shot! You're now signed into your new account."
          );
          // userCreation(user.uid); //user.uid = adwqdqdf21
          // Navigates to "Onboarding" page after successful sign-up. This should prompt the user to fill out a form
          navigate("/onboarding");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        alert(
          `${errorCode} - Please enter a valid email address and password.`
        );
        // ..
      });
  };

  return (
    <div className="sign-up-section">
      <div className="sign-up-container">
        <h1 className="signup-header">Let's get you signed up.</h1>
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
          <label htmlFor="password">Password:</label>
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
        <button id="create" onClick={signUp}>
          Create account
        </button>
        <h3>
          Our quick and easy onboarding experience will allow our algorithm to
          find the right nightlife venues for you!
        </h3>
      </div>
    </div>
  );
}
