import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Establishments = () => {
  const [preferences, setPreferences] = useState([]);
  const [search, setSearch] = useState("");

  const apiURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    // const API = `https://api.yelp.com/v3/businesses/search?categories=nightlife&location=NYC`;
    axios
      .get(`${apiURL}/users`)
      .then((response) => {
        setPreferences(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
    }, []);
    
    console.log(preferences)

  const handleSearch = (event) => {
    let input = event.target.value
    setSearch(input)
    return search
  };

  return (
    <div>
      <h1> Hi! </h1>
    </div>
  );
};

export default Establishments;
