import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Favorite({ user }) {
  const [likedEstablishments, setLikedEstablishments] = useState([]);
  console.log(user);
  useEffect(() => {
    axios
      .get(`${API}/userestablishments/${user.id}`)
      .then((response) => {
        console.log(response.data.payload);
        setLikedEstablishments([...likedEstablishments, response.data.payload]);
      })
      .catch();
    console.log("LIKED PLACES: ", likedEstablishments);
  }, [user]);

  return (
    <div>
      {likedEstablishments.map((establishment, index) => {
        return (
          <div key={index}>
            <h1>{establishment.name}</h1>
            <img alt="establishment">{establishment.image}</img>
            <Link to={`${API}/establishments/${establishment.yelp_id}`}>View this Establishment</Link>
          </div>
        );
      })}
    </div>
  );
}
