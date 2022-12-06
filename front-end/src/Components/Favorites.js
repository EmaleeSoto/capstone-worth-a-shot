import axios from "axios";
import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import Favorite from "./Favorite";
const API = process.env.REACT_APP_API_URL;

export default function Favorites({ user, Favorite }) {
  const [likedEstablishments, setLikedEstablishments] = useState([]);
  console.log(user);

  useEffect(() => {
    axios
      .get(`${API}/userestablishments/${user.id}`)
      .then((response) => {
        console.log(response.data.payload);
        setLikedEstablishments([
          ...response.data.payload,
        ]);
      })
      .catch();
    console.log("LIKED PLACES:", likedEstablishments);
  }, [user]);

  //display yelp.id

  return <div>Favorites
    {likedEstablishments.map((establishment, index) => {
      return (
        <div key={index}> 
          <Link to={`/establishment/${establishment.yelp_id}`}><h1>{establishment.name}</h1></Link>
          </div>
      )
    })}
  </div>;
}
