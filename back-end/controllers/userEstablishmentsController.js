const express = require("express");
const db = require("../db/dbConfig");
const userEstablishments = express.Router();
const axios = require("axios");
const {
  getAllUserEstablishments,
  createUserEstablishment,
} = require("../queries/userestablishments");

//INDEX
userEstablishments.get("/", async (req, res) => {
  const allUserEstablishments = await getAllUserEstablishments();
  res.json({ payload: allUserEstablishments });
});

//GET YELP ESTABLISHMENT
//https://api.yelp.com/v3/businesses
userEstablishments.get("/favorited/:yelpid", async (req, res) => {
  const allUserEstablishments = await getAllUserEstablishments();
  res.json({ payload: allUserEstablishments });
});

//POST
userEstablishments.post("/addfavorite", async (req, res) => {
  try {
    const newUserEstablishment = await createUserEstablishment(req.body);
    res.json({ payload: newUserEstablishment });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

// user.get("/:id/preferences", async (req, res) => {
//   let myUser = await getUser(req.params.id);
//   let myUserPrefs = [];
//   let categories = myUser.atmosphere.split(", ");
//   for (const category of categories) {
//     let tempArray = await axios
//       .get(
//         `https://api.yelp.com/v3/businesses/search?location=NYC&categories=${category}`,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//           },
//         }
//       )
//       .then((response) => {
//         return response.data.businesses;
//       });
//     myUserPrefs = [...myUserPrefs, ...tempArray];
//   }

//   res.send(myUserPrefs);
// });

module.exports = userEstablishments;
