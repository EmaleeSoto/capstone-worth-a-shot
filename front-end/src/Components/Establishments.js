import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
//specifically the users preferences
//firebase/id
//string.split
const UserPreferences = ({ user }) => {
  const [preferenceList, setPreferenceList] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    console.log(user);
    axios
      .get(`${API}/users/${user.id}/preferences`)
      .then((response) => {
        setPreferenceList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  const handleLikes = (likes) => {
    const likedSpot = setLikes([`${preferenceList.name}`]);
    console.log(likedSpot);
    return setLikes(likedSpot);
  };

  console.log("This is a logged in user's preferences :", preferenceList);

  return (
    <div>
      <h1>Hello!!</h1>
      {preferenceList.map((preference, index) => {
        return (
          <div key={index}>
            <h1>{preference.name}</h1>
            <h3>{preference.location.display_address}</h3>
            <h5>Budget: {preference.price}</h5>
            <h5>Contact: {preference.display_phone}</h5>
            <label htmlFor="favorite">Favorite this Spot?</label>
            <button onClick={handleLikes} value={likes}>
              ⭐️
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserPreferences;
