import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

export default function UserSignIn({ setLogin }) {
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
          alert("Welcome back! You're now logged in!");
          // Navigates to "Establishments" page after successful sign-in
          navigate("/places");
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
    <div className="sign-up-section">
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        placeholder="user@example.com"
        onChange={handleTextChange}
        autoComplete="off"
        required
      />
      <br></br>
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        placeholder="Enter password"
        onChange={handleTextChange}
        autoComplete="off"
        required
      />
      <br></br>
      <button id="login" onClick={signIn}>
        Login
      </button>
    </div>
  );
}