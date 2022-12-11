import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Drink from "./Drink";
import axios from "axios";
import "./Drinks.css";
const API = process.env.REACT_APP_API_URL;

//import from backend

const Drinks = () => {
  const [booze, setBooze] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/alcohols/category/${category}`)
      .then((response) => {
        setBooze(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div>
      <Link id="alcohol-back-button" to="/alcohols/categories">
        <button>Back</button>
      </Link>
      <h1 className="drink-header">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <section className="alcohol-list">
        {booze.map((booze, index) => {
          return <Drink booze={booze} index={index} />;
        })}
      </section>
    </div>
  );
};

export default Drinks;
