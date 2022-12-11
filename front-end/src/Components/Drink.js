import React from "react";
import "./Drink.css";

export default function Drink({ booze, index }) {
  const formatIngredients = (ingredients) => {
    let array = ingredients.split(", ");
    return array.map((ingredient) => {
      return <li>{ingredient}</li>;
    });
  };
  return (
    <div className="alcohol-grid-wrapper" key={index}>
      <div className="first-cell">
        <h1>{booze.name}</h1>
        <img src={booze.image} alt={booze.name} />
        <h3>Proof: {booze.proof}%</h3>
      </div>
      <div className="second-cell">
        <div className="second-wrap">
          <h2>Ingredients</h2>
          <ul>{formatIngredients(booze.ingredients)}</ul>
        </div>
      </div>
      <div className="third-cell">
        <h3>{booze.description}</h3>
      </div>
    </div>
  );
}
