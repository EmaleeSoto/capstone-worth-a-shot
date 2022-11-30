import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
//specifically the users preferences
//firebase/id
//string.split 
const UserPreferences = ({ user }) => {
    const [ preferenceList, setPreferenceList ] = useState([])
    
  useEffect(() => {
    axios
      .get(`${API}/users/${user.id}/preferences`)
      .then((response) => {
        setPreferenceList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  console.log("This is a logged in user's preferences :", preferenceList);

  return (
    <div>
      <h1>Hello!!</h1>
    </div>
  );
};

export default UserPreferences;
