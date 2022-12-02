import axios from "axios";
import React from "react";
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import Favorite from "./Favorite"
const API = process.env.REACT_APP_API_URL


export default function Favorites({ user }) {
  //make call to user/id/preferences
  //add ability to favorite something
  //save favorite as state
  const [loggedInUser, setLoggedInUser] = useState([])
  const [favorites, setFavorites] = useState([])
  
  
  useEffect(() => {
    axios.get(`${API}/userestablishments/${user.id}`)
    .then((response) => {
      setLoggedInUser(response.data.payload)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [user])

  const handleOnClick = (event) => {
    //should make a call to yelp api for the general business
    //emalee is working on a specific back end route that will acqurire the yelp id
    event.preventDefault()
  }

  console.log(loggedInUser) //get request to yelp id

  return <div className="Bookmarks">
  <section>
    <table>
      <thead>
        <tr>
          <th></th>
          {"This button should path to /myfavorites/{id}. ID being the 'name of the establishment. These favorites will be imported and mapped out a"}
          <Link><h1>Take me there!</h1></Link>
        </tr>
      </thead>
      <tbody>
        {/* {favorites.map((favorite) => {
          return <Favorite key={favorites.id} favorites={favorites} />;
        })} */}
      </tbody>
    </table>
  </section></div>;
}
