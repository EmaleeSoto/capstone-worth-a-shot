import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneEstablishment from "./OneEstablishment";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const Establishments = ({ user }) => {
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

  const handleLikes = () => {
    const likedSpot = setLikes([`${preferenceList.name}`]);
    return setLikes(likedSpot);
  };

  return (
    <div>
      <h1>Hello!!</h1>
      {preferenceList.map((preference) => {
        return (
          <OneEstablishment preference={preference} handleLikes={handleLikes} />
        );
      })}
    </div>
  );
};

export default Establishments;
