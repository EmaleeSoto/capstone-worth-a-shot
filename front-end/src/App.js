import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import LandingPage from "./Pages/LandingPage";
import SplashPage from "./Pages/SplashPage";
import Home from "./Pages/Home";
import "./App.css";
import Establishments from "./Components/Establishments";
import Onboarding from "./Components/Onboarding";
import NavBar from "./Components/NavBar";
import Drinks from "./Components/Drinks";
import LandingPageSignedIn from "./Pages/LandingSignedIn";
import UserSignIn from "./Components/UserSignIn";
import UserSignUp from "./Components/UserSignUp";
import IndividualDrink from "./Components/IndividualDrink";
import DrinksByPref from "./Components/DrinksByPref";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
import UserPreferences from "./Components/UserPreferences";

const App = () => {
  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [firebaseId, setFirebaseId] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setLogin(true);
      setFirebaseId(user.uid);
    } else {
      // No user is signed in.
      setLogin(false);
    }
  });

  useEffect(() => {
    if (loggedIn) {
      axios
        .get(`${API}/users/firebase/${firebaseId}`)
        .then((response) => {
          setUser(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUser({});
    }
  }, [loggedIn]);

  const signOutOfAccount = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("You have signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const getSignedInUser = () => {
    axios
      .get(`${API}/users/firebase/${firebaseId}`)
      .then((response) => {
        setUser(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="worth-a-shot">
      <Router>
        <NavBar signOutOfAccount={signOutOfAccount} loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/user/landing" element={<LandingPageSignedIn />} />
          <Route
            path="/onboarding"
            element={<Onboarding userFirebaseId={firebaseId} />}
          />
          <Route path="/sign-in" element={<UserSignIn />} />
          <Route
            path="/sign-up"
            element={<UserSignUp userFirebaseId={firebaseId} />}
          />
          <Route path="/splash" element={<SplashPage />} />
          <Route path="/places" element={<Establishments user={user} />} />
          <Route path="/alcohols" element={<Drinks />} />
          <Route path="/alcohols/:id" element={<IndividualDrink />} />
          <Route path="/alcohols/category" element={<DrinksByPref />}/>
          <Route path="/user/:id/preferences" element={<UserPreferences/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
