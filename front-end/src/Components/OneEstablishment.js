import { Link } from "react-router-dom";

export default function OneEstablishment({ preference }) {
  let array = [];
  const formatCategories = () => {
    preference.categories.forEach((pref) => {
      array.push(pref.title);
    });
    return array.join(" | ");
  };
  return (
    <div className="one-establishment" key={preference.id}>
      <div>
        <Link to={`/establishment/${preference.id}`}>
          <h1 className="establishment-name">{preference.name}</h1>
          <img
            id="index-image"
            src={preference.image_url}
            alt={preference.name}
          />
        </Link>
        <p>
          {preference.location.display_address[0]}
          {", "}
          {preference.location.display_address[1]}
        </p>
        <p>Rating: {preference.rating} / 5</p>

        <p className="pref-category"> Categories: {formatCategories()}</p>
      </div>
    </div>
  );
}
