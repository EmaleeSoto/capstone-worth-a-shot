const express = require("express");
const db = require("../db/dbConfig");
const alcohol = express.Router();
const { getAllAlcohols, getAlcohol } = require("../queries/alcohols");

//INDEX
alcohol.get("/", async (req, res) => {
  const allAlcohols = await db.any("SELECT * FROM alcohols"); //TODO: shouldn't this be getAllAlcohols?
  res.json({ payload: allAlcohols });
});

//SHOW
alcohol.get("/:id", async (req, res) => {
  const { id } = req.params;
  const alcohol = await getAlcohol(id);
  if (alcohol.id) {
    res.json({ success: true, payload: alcohol });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

module.exports = alcohol;
