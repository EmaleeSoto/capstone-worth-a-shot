import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Establishments = () => {
  const [preferences, setPreferences] = useState([]);
  const [search, setSearch] = useState("");

  const apiURL = process.env.REACT_APP_API_URL;

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
  }, [apiURL]);

  //   console.log(preferences);

  const handleSearch = (event) => {
    let input = event.target.value;
    setSearch(input);
    return search;
  };

  return (
    <div>
      <h1> Hi! </h1>
      {preferences.map((pref) => {
        console.log(pref);
        return (
          <div key={pref.name + pref.zip_code}>
            <h1>{pref.name}</h1>
            <h3>
              {pref.age} - {pref.gender} - {pref.zip_code}
            </h3>
            <h4>{pref.atmosphere}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Establishments;
