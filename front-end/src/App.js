import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Establishments from './Components/Establishments';
import UserIndex from './Components/UserIndex';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/places" element={<Establishments />}/>
          <Route path="/users" element={<UserIndex />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
