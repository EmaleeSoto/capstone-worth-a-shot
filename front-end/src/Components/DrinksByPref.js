import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const DrinksByPref = () => {
  const [allDrinks, setAllDrinks] = useState([]);
  const [displayDrinks, setDisplayDrinks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/alcohols`)
      .then((response) => {
        setAllDrinks(response.data.payload);
        setDisplayDrinks(response.data.payload)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterForBeer = (event) => {
    event.preventDefault();
    let newArray = allDrinks.filter((drink) => {
      return drink.category === "Beer";
    });
    setDisplayDrinks([...newArray]); //don't need spread ??
  };

  const filterForCider = (event) => {
    event.preventDefault();
    let newArray = allDrinks.filter((drink) => {
      return drink.category === "Cider";
    });
    setDisplayDrinks([...newArray]);
  };

  const filterForWine = (event) => {
    event.preventDefault();
    let newArray = allDrinks.filter((drink) => {
        return drink.category === 'Wine'
    })
    setDisplayDrinks([...newArray])
  }

  const filterforGin = (event) => {
    event.preventDefault();
    let newArray = allDrinks.filter((drink) => {
        return drink.category === 'Gin'
    })
    setDisplayDrinks([...newArray])
  }

  const filterForWhiskey = (event) => {
    event.preventDefault()
    let newArray = allDrinks.filter((drink) => {
        return drink.category === 'Whiskey'
    })
    setDisplayDrinks([...newArray])
  }

  const filterForBrandy = (event) => {
    event.preventDefault()
    let newArray = allDrinks.filter((drink) => {
        return drink.category === 'Brandy'
    })
    setDisplayDrinks([...newArray])
  }

  const showAllDrinks = (event) => {
    event.preventDefault()
    setDisplayDrinks(allDrinks)
  }

  console.log(
    "This is a list of the beer:",
    displayDrinks
  );

  return (
    <div>
      {displayDrinks.map((drink, index) => {
        return (
          <div key={index}>
            <h1>{drink.name}</h1>
            <h3>Proof: {drink.proof}</h3>
            <h5>{drink.description}</h5>
          </div>
        );
      })}
      <button onClick={filterForBeer}>Beer!</button>
      <section></section>
      <button onClick={filterForCider}>Cider!</button>
      <section></section>
      <button onClick={filterForBrandy}>Brandy!</button>
      <section></section>
      <button onClick={filterforGin}>Gin!</button>
      <section></section>
      <button onClick={filterForWhiskey}>Whiskey!</button>
      <section></section>
      <button onClick={filterForWine}>Wine!</button>
      <section></section>
      <button onClick={showAllDrinks}>All Drinks!</button>
    </div>
  );
};
export default DrinksByPref;
