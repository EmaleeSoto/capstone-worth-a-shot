import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditProfile({
  user,
  setUser,
  signOutOfAccount,
  sendEmailVerification,
  userVerified,
}) {
  //const { id } = useParams();
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
    setAtmospheres([...atmospheres, ...userAtmospheres]);
  }, [user]);
  console.log(userEdit);

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
    setUserEdit([...userEdit.atmosphere, ...atmospheres]);
    console.log(userEdit.atmosphere);
    updateUserInfo(userEdit);
  };
  console.log("Atmospheres: ", atmospheres);

  const deleteUser = () => {
    axios.delete(`${API}/users/${user.id}`).catch((error) => {
      console.warn(error);
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete your profile?")) {
      deleteUser();
      signOutOfAccount();
      navigate("/");
    }
  };
  return (
    <div>
      {!userVerified ? (
        <h5 onClick={() => sendEmailVerification}>
          Verify your email address!
        </h5>
      ) : null}
      <form className="user-edit-form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          onChange={handleTextChange}
          autoComplete="off"
          value={userEdit.name}
          required
        />
        <br />
        <label htmlFor="age">Age? </label>
        <input
          id="age"
          name="age"
          type="number" //TODO: Change to calendar and calculate age later
          onChange={handleAgeChange}
          value={userEdit.age}
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
          value={userEdit.zip_code}
          autoComplete="off"
          required
        />
        <br />
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
        <button id="atmosphere" onClick={handleAtmosphere} value="cocktailbars">
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
        <button id="atmosphere" onClick={handleAtmosphere} value="hookah_bars">
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
        <button id="atmosphere" onClick={handleAtmosphere} value="coffeeshops">
          Coffee
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="comedyclubs">
          Comedy
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="danceclubs">
          Dancing
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="jazzandblues">
          Jazz and Blues
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="karaoke">
          Karaoke
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="musicvenues">
          Music
        </button>
        <button id="atmosphere" onClick={handleAtmosphere} value="poolhalls">
          Pool Hall
        </button>

        <br></br>
        <br></br>
        <input id="edit-user" type="submit" value="Update Profile" />
      </form>
      <button onClick={handleDelete}>Delete Profile</button>
    </div>
  );
}

export default EditProfile;
