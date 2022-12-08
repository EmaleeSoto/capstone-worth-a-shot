import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./ShowEstablishment.css";
const API = process.env.REACT_APP_API_URL;
const YELP_API = process.env.REACT_APP_YELP_API_URL;

//TODO: SHOW PAGE WORKS, FIX ADDRES1 ERROR (BEING UNDEFINED)
//SOMETIMES ADDRESS1 IS UNDEFINED AND CRASHES APP DESPITE CONDITIONAL
export default function ShowEstablishment({ user }) {
  const [establishment, setEstablishment] = useState({});
  const [venueReviews, setVenueReviews] = useState([]);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${YELP_API}/${id}`)
      .then((res) => {
        setEstablishment(res.data);
      })
      .catch(() => {
        navigate("/not found");
      });

    axios
      .get(`${YELP_API}/reviews/${id}`)
      .then((res) => {
        setVenueReviews(res.data.reviews);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const militaryToUSD = (time) => {
    let hrs = String(time).substring(0, 2);
    let postScript = Number(hrs) > 12 ? "PM" : "AM";
    let mins = String(time).substring(2);
    return `${postScript === "PM" ? hrs - 12 : hrs}:${mins} ${postScript}`;
  };

  const handleLike = (event) => {
    event.preventDefault();
    setLike(true);
    axios
      .post(`${API}/userestablishments/addfavorite`, {
        user_uid: user.id,
        yelp_id: establishment.id,
        name: establishment.name,
        image: establishment.image_url,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="establishment-show">
      <Link to="/establishments">
        <button>Go back to Establishments</button>
      </Link>
      <section className="establishment-info-grid">
        <img
          alt="Establishment"
          className="establishment-info-image"
          src={
            establishment.image_url !== ""
              ? establishment.image_url
              : "./images/no-image.png"
          }
        />
        <div>
          <h1 className="establishment-show-name">{establishment.name}</h1>
          {/* <h3>Address: {establishment.location.display_address[0]}</h3> */}
          <h4>Contact: {establishment.display_phone}</h4>
          <h4>Rating: {establishment.rating} / 5</h4>
          <button onClick={handleLike}>⭐️</button>
        </div>
        {/* <h3>
          Hours: {militaryToUSD(establishment.hours[0].open[0].start)} -
          {militaryToUSD(establishment.hours[0].open[0].end)}
        </h3> */}

        {/* {establishment.photos.map((photo) => {
        return <img src={photo} alt="photo" />;
      })} */}
      </section>
      {/* <section>{venueReviews[0].user.name}</section> */}
    </div>
  );
}
