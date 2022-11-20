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
import Beverages from "./Pages/Beverages"
import LandingPageSignedIn from "./Pages/LandingSignedIn";

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
          <Route path="/beverages" element={<Beverages />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
