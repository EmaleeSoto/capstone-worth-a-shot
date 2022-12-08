const express = require("express");
const bars = express.Router();
const axios = require("axios");
const getUser = require("../queries/users");

bars.get("/:id", async (req, res) => {
  // let id = req.params.id
  let yelpResponse = await axios.get(
    `https://api.yelp.com/v3/businesses/${req.params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        // Origin: "localhost",
        // withCredentials: true,
      },
    }
  );
  res.send(yelpResponse.data);
});

bars.get("/reviews/:id", async (req, res) => {
  // let id = req.params.id
  let yelpResponse = await axios.get(
    `https://api.yelp.com/v3/businesses/${req.params.id}/reviews?limit=10&sort_by=yelp_sort`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        // Origin: "localhost",
        // withCredentials: true,
      },
    }
  );
  res.send(yelpResponse.data);
});

module.exports = bars;
