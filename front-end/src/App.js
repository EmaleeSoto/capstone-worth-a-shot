import Home from "./Components/Home";
import {BroswerRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import SplashPage from "./Pages/SplashPage";
import Home from "./Pages/Home";
import "./App.css";
import Establishments from "./Components/Establishments";
import Nav from "./Components/NavBar";

const App = () => {
  return (
    <div className="worth-a-shot">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/landing" element={<LandingPage />}/>
          <Route path="/splash" element={<SplashPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/places" element={<Establishments />}/>
          <Route path="/beverages" element={<Beverage />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
