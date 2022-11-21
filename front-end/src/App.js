import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SplashPage from "./Pages/SplashPage";
import Home from "./Pages/Home";
import "./App.css";
import Establishments from "./Components/Establishments";
import NavBar from "./Components/NavBar";
import Drinks from "./Components/Drinks"
import LandingPageSignedIn from "./Pages/LandingSignedIn";
import IndividualDrink from './Components/IndividualDrink'

const App = () => {
  return (
    <div className="worth-a-shot">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/landing" element={<LandingPage />}/>
          <Route path="/user/landing" element={<LandingPageSignedIn />}/>
          <Route path="/splash" element={<SplashPage />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/places" element={<Establishments />}/>
          <Route path="/alcohols" element={<Drinks />}/>
          <Route path="/alcohols/:id" element={<IndividualDrink />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
