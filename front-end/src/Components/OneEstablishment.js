import { Link } from "react-router-dom";

export default function OneEstablishment({ preference, handleLikes }) {
  return (
    <div key={preference.id}>
      <Link to={`/establishment/${preference.id}`}>
        <div>
          <h1>{preference.name}</h1>
          <h3>{preference.location.display_address}</h3>
          <h5>Rating: {preference.rating} / 5</h5>
          <label htmlFor="favorite">Favorite this Spot?</label>
          <button onClick={handleLikes}>⭐️</button>
        </div>
      </Link>
    </div>
  );
}
