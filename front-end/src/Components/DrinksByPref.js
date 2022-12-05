import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DrinksByPref.css";
const API = process.env.REACT_APP_API_URL;

const DrinksByPref = ({ user }) => {
  const [allDrinks, setAllDrinks] = useState([]);
  const [displayDrinks, setDisplayDrinks] = useState([]);
  const [userTastes, setUserTastes] = useState([]);

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
      <h1 className="drink-header">What kind of drink are you looking for?</h1>
      <section className="drink-category-grid">
        <Link to="/alcohols/category/beer">
          <button className="drink-category-button" value="beer">
            Beer!
          </button>
        </Link>
        <Link to="/alcohols/category/cider">
          <button className="drink-category-button" value="cider">
            Cider!
          </button>
        </Link>
        <Link to="/alcohols/category/wine">
          <button className="drink-category-button" value="wine">
            Wine!
          </button>
        </Link>
        <Link to="/alcohols/category/whiskey">
          <button className="drink-category-button" value="whiskey">
            Whiskey!
          </button>
        </Link>
        <Link to="/alcohols/category/gin">
          <button className="drink-category-button" value="gin">
            Gin!
          </button>
        </Link>
        <Link to="/alcohols/category/brandy">
          <button className="drink-category-button" value="brandy">
            Brandy!
          </button>
        </Link>
      </section>
    </div>
  );
};
export default DrinksByPref;
