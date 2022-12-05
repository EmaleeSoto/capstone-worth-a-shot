import { Link } from "react-router-dom";

export default function OneEstablishment({ preference, handleLikes }) {
  return (
    <div key={preference.id}>
      <div>
        <Link to={`/establishment/${preference.id}`}>
          <h1 className="establishment-name">{preference.name}</h1>
        </Link>
        <p>{preference.location.display_address}</p>
        <p>Rating: {preference.rating} / 5</p>
        <label htmlFor="favorite">Favorite this Spot?</label>
        <button onClick={handleLikes}>⭐️</button>
      </div>
    </div>
  );
}
