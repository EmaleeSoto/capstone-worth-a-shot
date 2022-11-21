import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

export default function SignUp({ setLogin }) {
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
          // Navigates to "Establishments" page after successful sign-in
          navigate("/places");
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
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleTextChange}
        autoComplete="off"
        required
      />
      <br></br>
      <button id="create" onClick={signUp}>
        Create account
      </button>
    </div>
  );
}
