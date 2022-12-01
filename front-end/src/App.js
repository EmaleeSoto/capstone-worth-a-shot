import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import SplashPage from "./Pages/SplashPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";
import Onboarding from "./Components/Onboarding";
import NavBar from "./Components/NavBar";
import Drinks from "./Components/Drinks";
import LandingPageSignedIn from "./Pages/LandingSignedIn";
import UserSignIn from "./Components/UserSignIn";
import UserSignUp from "./Components/UserSignUp";
import IndividualDrink from "./Components/IndividualDrink";
import DrinksByPref from "./Components/DrinksByPref";
import Establishments from "./Components/Establishments";
import axios from "axios";
import Favorites from "./Components/Favorites";
import ShowEstablishment from "./Components/ShowEstablishment";
const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [firebaseId, setFirebaseId] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setLogin(true);
      setFirebaseId(user.uid); //firebase
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
  }, [loggedIn, firebaseId]);

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
  console.log("THIS IS USER: ", user);
  return (
    <div className="worth-a-shot">
      <Router>
        <NavBar signOutOfAccount={signOutOfAccount} loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myhome" element={<LandingPageSignedIn user={user} />} />
          <Route
            path="/establishments"
            element={<Establishments user={user} />}
          />
          <Route path="/establishment/:id" element={<ShowEstablishment />} />
          <Route
            path="/onboarding"
            element={<Onboarding userFirebaseId={firebaseId} />}
          />
          <Route path="/sign-in" element={<UserSignIn />} />
          <Route
            path="/sign-up"
            element={<UserSignUp userFirebaseId={firebaseId} />}
          />
          <Route path="/myfavorites" elemement={<Favorites />} />
          <Route path="/splash" element={<SplashPage />} />
          {/* <Route path="/places" element={<Establishments user={user} />} /> */}

          <Route path="/alcohols" element={<Drinks />} />
          <Route path="/alcohols/:id" element={<IndividualDrink />} />
          <Route path="/alcohols/category" element={<DrinksByPref user={user}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
