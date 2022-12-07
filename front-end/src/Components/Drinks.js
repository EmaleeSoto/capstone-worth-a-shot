import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
      <h1 className="drink-header">Boozer's Index</h1>
      <section className="alcohol-list">
        {booze.map((booze, index) => {
          return (
            <div key={index}>
              <h1>{booze.name}</h1>
              <h3>Proof: {booze.proof}%</h3>
              <h5>{booze.description}</h5>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Drinks;
