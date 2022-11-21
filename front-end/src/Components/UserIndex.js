import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const UserIndex = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => {
        setUsers(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
    {console.log("This is a list of users:", users)}
    
    return (
        <div className="user-list">
           {users.map((user, index) => {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <h3>{user.age}</h3>
                    <h4>{user.gender}</h4>
                </div>
            )
           })} 
            
    </div>
  );
};

export default UserIndex;
