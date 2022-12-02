import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Onboarding.css";
const API = process.env.REACT_APP_API_URL;

//TODO: LET FLAVORS HAVE MULTIPLE INPUTS

export default function Onboarding({ userFirebaseId }) {
  let [displayNextForm, setDisplayNextForm] = useState(false);
  let [user, setUser] = useState({
    name: "",
    age: 0,
    gender: "",
    zip_code: "",
    personality: "",
    flavors: "",
    atmosphere: "",
    firebase_id: "",
  });
  let [atmospheres, setAtmospheres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("FIREBASE UID: ", userFirebaseId);
    setUser({ firebase_id: userFirebaseId });
  }, []);

  const addUser = async (user) => {
    await axios
      .post(`${API}/users`, user)
      .then((response) => {
        navigate("/myhome");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleAgeChange = (event) => {
    setUser({ ...user, [event.target.id]: Number(event.target.value) });
  };

  const handleAtmosphere = (event) => {
    event.preventDefault();
    if (atmospheres.indexOf(event.target.value) > 0) {
      atmospheres.splice(atmospheres.indexOf(event.target.value), 1);
      setAtmospheres(atmospheres);
    } else {
      setAtmospheres((atmospheres) => [...atmospheres, event.target.value]);
    }
  };

  //Check validity of Zip Code
  const zipCodeCheck = (zipCode) => {
    if (zipCode.length !== 5) {
      return false;
    }
    for (const num of zipCode) {
      if (!Number(num)) {
        return false;
      }
    }
    return true;
  };

  const goToNextForm = (event) => {
    event.preventDefault();
    setDisplayNextForm(true);
  };
  const goToPreviousForm = (event) => {
    event.preventDefault();
    setDisplayNextForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    user.atmosphere = atmospheres.join(", ");
    if (!zipCodeCheck(user.zip_code)) {
      alert("Please enter a valid Zip Code!");
    } else {
      console.log(user.atmosphere);
      addUser(user);
      console.log(user);
    }
  };

  return (
    <div className="onboarding">
      <form onSubmit={handleSubmit}>
        <div id={!displayNextForm ? "show" : "hidden"}>
          <h1 className="onboarding-header">Let's get to know you better.</h1>
          <label htmlFor="name">What's your name? </label>
          <input
            id="name"
            type="text"
            onChange={handleTextChange}
            autoComplete="off"
            required
          />
          <br />
          <label htmlFor="age">Age? </label>
          <input
            id="age"
            min="21"
            max="99"
            type="number" //TODO: Change to calendar and calculate age later
            onChange={handleAgeChange}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <label>What is your gender identity?</label>
          <br />
          <label htmlFor="male">Male</label>
          <input
            id="male"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Male"
          />
          <br />
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Female"
          />
          <br />
          <label htmlFor="other">Other</label>
          <input
            id="other"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Other"
          />
          <br />
          <br />
          <label htmlFor="zip_code">Zip Code: </label>
          <input
            id="zip_code"
            type="text"
            size="5"
            maxLength="5"
            onChange={handleTextChange}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <button onClick={goToNextForm}>Next</button>
        </div>
        <div id={displayNextForm ? "show" : "hidden"}>
          <h1 className="onboarding-header">Great! Let's keep going.</h1>
          <label htmlFor="personality">How would you describe yourself?</label>
          <select id="personality" onChange={handleTextChange}>
            <option hidden disabled selected value>
              -- select an option --
            </option>
            <option value="Extrovert">Extrovert</option>
            <option value="Introvert">Introvert</option>
            <option value="Ambivert">Ambivert</option>
          </select>
          <br></br>

          <label>Sweet</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Sweet"
          />
          <br></br>
          <label>Bitter</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Bitter"
          />
          <br></br>
          <label>Sour</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Sour"
          />
          <br></br>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="adultentertainment"
          >
            Adult Entertainment
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="stripclubs">
            Strip Club
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="cocktailbars"
          >
            Cocktails
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="champagne_bars"
          >
            Fancy
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="divebars">
            Casual and Social
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="gaybars">
            LGBTQ+
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="hookah_bars"
          >
            Hookah
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="lounges">
            Lounge
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="pubs">
            Pubs
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="sakebars">
            Sake
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="sportsbars">
            Sports
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="coffeeshops"
          >
            Coffee
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="comedyclubs"
          >
            Comedy
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="danceclubs">
            Dancing
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="jazzandblues"
          >
            Jazz and Blues
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="karaoke">
            Karaoke
          </button>
          <button
            id="atmosphere"
            onClick={handleAtmosphere}
            value="musicvenues"
          >
            Music
          </button>
          <button id="atmosphere" onClick={handleAtmosphere} value="poolhalls">
            Pool Hall
          </button>

          <br></br>
          <br></br>
          <button onClick={goToPreviousForm}>Back</button>
          <input id="submit-new-user" type="submit" value="Create Profile" />
        </div>
      </form>
    </div>
  );
}
