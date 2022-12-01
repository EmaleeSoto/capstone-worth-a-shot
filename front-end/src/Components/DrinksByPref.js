import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const DrinksByPref = ({ user }) => {
  const [allDrinks, setAllDrinks] = useState([]);
  const [displayDrinks, setDisplayDrinks] = useState([]);
  const [userTastes, setUserTastes] = useState([])

  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  useEffect(() => {
    axios
      .get(`${API}/alcohols`)
      .then((response) => {
        setAllDrinks(response.data.payload);
        setDisplayDrinks(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loggedInUser]);

  
  return (
    <div>
     <Link to="/alcohols/category/beer"><button value="beer">Beer!</button></Link>
      <br/>
      <Link to="/alcohols/category/cider"><button value="cider">Cider!</button></Link>
      <br/>
      <Link to="/alcohols/category/wine"><button value="wine">Wine!</button></Link>
      <br/>
      <Link to="/alcohols/category/whiskey"><button value="whiskey">Whiskey!</button></Link>
      <br/>
      <Link to="/alcohols/category/gin"><button value="gin">Gin!</button></Link>
      <br/>
      <Link to="/alcohols/category/brandy"><button value="brandy">Brandy!</button></Link>
      <br/>
    </div>
  );
};
export default DrinksByPref;
