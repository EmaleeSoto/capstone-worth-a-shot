import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="/" element={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
