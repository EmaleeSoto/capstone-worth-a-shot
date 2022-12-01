import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const DrinksByPref = ({ user }) => {
  const [allDrinks, setAllDrinks] = useState([]);
  const [displayDrinks, setDisplayDrinks] = useState([]);
  const [userTastes, setUserTastes] = useState([])

  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  useEffect(() => {
    axios
      .get(`${API}/alcohols`)
      .then((response) => {
        setAllDrinks(response.data.payload);
        setDisplayDrinks(response.data.payload)
        setUserTastes(response.data.payload)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loggedInUser]);

  // useEffect(() => {
  //   axios.get(`${API}/users/${user.id}`)
  //   .then((response) => {
  //     setDisplayDrinks(response.data.payload.flavor)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, [])


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

  const filterByTaste = (event) => {
    event.preventDefault()
    setDisplayDrinks(allDrinks)
    let newArray = allDrinks.filter((drink) => {
        return drink.flavors === drink.flavors.indexOf(loggedInUser.flavors.split(", "))
    })
    // if (newArray.length >= 0) {
    //   return "You haven't set a taste preference!"
    // } else if (newArray > 1) {
    //   newArray.split(", ")
    // }
    setUserTastes(newArray)
    //drinkflavors into an array
    //split (", ")
    //array.indexof(loggedinUseretc) if indexOf >= 0
    //event.targte.value passed in
  }

  console.log(
    "This is a list of the beer:",
    displayDrinks, "This is a User's preferred Drink Flavor:", userTastes
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
      <button onClick={filterForBeer} value="beer">Beer!</button>
      <section></section>
      <button onClick={filterForCider} value="cider">Cider!</button>
      <section></section>
      <button onClick={filterForBrandy} value="brandy">Brandy!</button>
      <section></section>
      <button onClick={filterforGin} value="gin">Gin!</button>
      <section></section>
      <button onClick={filterForWhiskey} value="whiskey">Whiskey!</button>
      <section></section>
      <button onClick={filterForWine} value="wine">Wine!</button>
      <section></section>
      <button onClick={showAllDrinks}>All Drinks!</button>
      <button onClick={filterByTaste}>Get by Flavor!</button>
    </div>
  );
};
export default DrinksByPref;
