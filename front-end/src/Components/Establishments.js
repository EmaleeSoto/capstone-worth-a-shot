import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Establishments = () => {
  const [preferences, setPreferences] = useState([]);
  const [search, setSearch] = useState("");

  const apiURL = process.env.REACT_APP_API_URL
  const BEARER_TOKEN = '0OFq09DO1FrY00_pps8QANa0NO9LX4ObCv9NSKt0WNAnhEQSAjJho-65743UJuX6Au2VSfh3QKDqIacJ7W3Rz6DgLgUGQ2gJ47AHLbE8iD5_KiXI3ch6LvcGcRR1Y3Yx'

  const fetchItems = async () => {
  const data = await axios
    .get(
      `https://api.yelp.com/v3/businesses/search?categories=nightlife&location=NYC`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
        params: {
          term: 'nightlife',
        },
      },
    )
  
    .then(json => {
      setPreferences({ preferences: data });
    })
    .catch(err => {
      console.log(err);
    });

 }
    console.log(fetchItems(preferences))

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
