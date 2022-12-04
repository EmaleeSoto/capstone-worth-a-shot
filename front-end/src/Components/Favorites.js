import axios from "axios";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;

export default function Favorites({ user }) {
  const [likedEstablishments, setLikedEstablishments] = useState([]);
  console.log(user);
  useEffect(() => {
    axios
      .get(`${API}/userestablishments/${user.id}`)
      .then((response) => {
        console.log(response.data.payload);
        setLikedEstablishments([
          ...likedEstablishments,
          ...response.data.payload,
        ]);
      })
      .catch();
    console.log("LIKED PLACES: ", likedEstablishments);
  }, [user]);

  //display yelp.id

  return <div>Favorites</div>;
}
