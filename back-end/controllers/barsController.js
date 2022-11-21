const express = require("express");
const bars = express.Router();
const axios = require("axios");
const getUser = require("../queries/users");

// bars.get("/", async (req, res) => {
//     let myUser = getUser(req.params.)
//   let yelpResponse = await axios.get(
//     `https://api.yelp.com/v3/businesses/search?location=NYC&categories=nightlife`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//         // Origin: "localhost",
//         // withCredentials: true,
//       },
//     }
//   );
//   res.send(yelpResponse.data);
// });

module.exports = bars;
