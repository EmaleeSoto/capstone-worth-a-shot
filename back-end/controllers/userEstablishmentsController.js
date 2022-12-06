const express = require("express");
const db = require("../db/dbConfig");
const userEstablishments = express.Router();
const axios = require("axios");
const {
  getAllUserEstablishments,
  getEstablishmentByUserId,
  createUserEstablishment,
  deleteUserEstablishment,
} = require("../queries/userestablishments");

//INDEX
userEstablishments.get("/", async (req, res) => {
  const allUserEstablishments = await getAllUserEstablishments();
  res.json({ payload: allUserEstablishments });
});

//GET BY USER ID
userEstablishments.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  const userLikedEstablishments = await getEstablishmentByUserId(userid);
  res.json({ success: true, payload: userLikedEstablishments });
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

//DELETE
userEstablishments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUserEstablishment = await deleteUserEstablishment(id);
  if (deletedUserEstablishment) {
    if (deletedUserEstablishment.id) {
      res
        .status(200)
        .json({ success: true, payload: deletedUserEstablishment });
    } else {
      res
        .status(404)
        .json({ success: false, payload: "User Eatablishment not found" });
    }
  } else {
    console.error(deletedUserEstablishment);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = userEstablishments;
