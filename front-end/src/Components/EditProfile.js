import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProfile.css";
const API = process.env.REACT_APP_API_URL;

function EditProfile({
  user,
  setUser,
  sendEmailVerification,
  userVerified,
  deleteFirebaseAccount,
}) {
  const navigate = useNavigate();
  const [userEdit, setUserEdit] = useState({
    name: "",
    age: 0,
    gender: "",
    zip_code: "",
    personality: "",
    flavors: "",
    atmosphere: "",
    firebase_id: "",
  });
  const [atmospheres, setAtmospheres] = useState([]);

  useEffect(() => {
    setUserEdit(user);
    let userAtmospheres = user.atmosphere.split(", ");
    setAtmospheres(userAtmospheres);
  }, [user, userVerified]);
  console.log(userEdit);

  const checkAtmosphereExists = (string) => {
    return userEdit.atmosphere.includes(string) ? true : false;
  };
  const handleTextChange = (event) => {
    event.preventDefault();
    setUserEdit({ ...userEdit, [event.target.id]: event.target.value });
  };

  const handleAgeChange = (event) => {
    event.preventDefault();
    setUserEdit({ ...userEdit, [event.target.id]: Number(event.target.value) });
  };

  const updateUserInfo = (editedUser) => {
    axios
      .put(`${API}/users/${user.id}`, editedUser)
      .then(() => {
        setUser(editedUser); //trying to rerender page
        navigate(`/myhome`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleAtmosphere = (event) => {
    event.preventDefault();
    event.target.className === "clicked"
      ? (event.target.className = "not-clicked")
      : (event.target.className = "clicked");
    let newArray = atmospheres;
    if (newArray.indexOf(event.target.value) >= 0) {
      newArray.splice(newArray.indexOf(event.target.value), 1);
      setAtmospheres(newArray);
    } else {
      setAtmospheres((atmospheres) => [...atmospheres, event.target.value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(atmospheres.join(", "));
    setUserEdit({ atmosphere: atmospheres.join(", ") });
    updateUserInfo(userEdit);
  };
  console.log("Atmospheres: ", atmospheres);

  const deleteUser = () => {
    axios.delete(`${API}/users/${user.id}`).catch((error) => {
      console.warn(error);
    });
    deleteFirebaseAccount();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete your profile?")) {
      deleteUser();
      navigate("/");
    }
  };
  return (
    <div className="edit-profile">
      <h1>Let's make sure we've got everything right.</h1>
      {!userVerified ? (
        <h4 id="not-verified" onClick={sendEmailVerification}>
          Verify your email address!
        </h4>
      ) : (
        <h4 id="verified">Your email address is verified ✅</h4>
      )}
      <form className="user-edit-form" onSubmit={handleSubmit}>
        <section className="info-wrap">
          <div className="input-label-wrap">
            <label className="bold" htmlFor="name">
              Name:{" "}
            </label>
            <input
              id="name"
              type="text"
              onChange={handleTextChange}
              autoComplete="off"
              value={userEdit.name}
              required
            />
            <br />
            <br />
            <label className="bold" htmlFor="age">
              Age:{" "}
            </label>
            <input
              id="age"
              name="age"
              type="number" //TODO: Change to calendar and calculate age later
              onChange={handleAgeChange}
              value={userEdit.age}
              autoComplete="off"
              required
            />
          </div>
          <br />
          <br />
          <label className="bold">What is your gender identity?</label>
          <br />
          <label htmlFor="male">Male</label>
          <input
            id="male"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Male"
            checked={user.gender === "Male" && "checked"}
          />
          <br />
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Female"
            checked={user.gender === "Female" && "checked"}
          />
          <br />
          <label htmlFor="other">Other</label>
          <input
            id="other"
            type="radio"
            name="gender"
            onChange={handleTextChange}
            value="Other"
            checked={user.gender === "Other" && "checked"}
          />
          <br />
          <br />
          <label className="bold" htmlFor="zip_code">
            Zip Code:{" "}
          </label>
          <input
            id="zip_code"
            type="text"
            size="5"
            maxLength="5"
            onChange={handleTextChange}
            value={userEdit.zip_code}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <label className="bold">Social Personality</label>
          <select id="personality" onChange={handleTextChange}>
            <option hidden disabled selected value>
              -- select an option --
            </option>
            <option value="Extrovert">Extrovert</option>
            <option value="Introvert">Introvert</option>
            <option value="Ambivert">Ambivert</option>
          </select>
          <br />
          <br />
          <label id="bev-flavors">Bev Flavors</label>
          <br />
          <label>Sweet</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Sweet"
          />
          <br />
          <label>Bitter</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Bitter"
          />
          <br />
          <label>Sour</label>
          <input
            id="flavors"
            type="radio"
            onChange={handleTextChange}
            name="flavors"
            value="Sour"
          />
          <br />
        </section>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("adultentertainment")
              ? "clicked"
              : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="adultentertainment"
        >
          Adult Entertainment
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("stripclubs") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="stripclubs"
        >
          Strip Club
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("cocktailbars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="cocktailbars"
        >
          Cocktails
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("champagne_bars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="champagne_bars"
        >
          Fancy
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("divebars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="divebars"
        >
          Casual and Social
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("gaybars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="gaybars"
        >
          LGBTQ+
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("hookah_bars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="hookah_bars"
        >
          Hookah
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("lounges") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="lounges"
        >
          Lounge
        </button>
        <button
          id="atmosphere"
          className={checkAtmosphereExists("pubs") ? "clicked" : "not-clicked"}
          onClick={handleAtmosphere}
          value="pubs"
        >
          Pubs
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("sakebars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="sakebars"
        >
          Sake
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("sportsbars") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="sportsbars"
        >
          Sports
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("coffeeshops") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="coffeeshops"
        >
          Coffee
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("comedyclubs") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="comedyclubs"
        >
          Comedy
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("danceclubs") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="danceclubs"
        >
          Dancing
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("jazzandblues") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="jazzandblues"
        >
          Jazz and Blues
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("karaoke") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="karaoke"
        >
          Karaoke
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("musicvenues") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="musicvenues"
        >
          Music
        </button>
        <button
          id="atmosphere"
          className={
            checkAtmosphereExists("poolhalls") ? "clicked" : "not-clicked"
          }
          onClick={handleAtmosphere}
          value="poolhalls"
        >
          Pool Hall
        </button>

        <br />
        <br />
        <input id="edit-user" type="submit" value="Update Profile" />
      </form>
      <button className="delete-button" onClick={handleDelete}>
        Delete Profile
      </button>
    </div>
  );
}

export default EditProfile;
