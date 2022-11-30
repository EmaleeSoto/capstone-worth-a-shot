const express = require("express");
const db = require("../db/dbConfig");
const alcohol = express.Router();
const {
  getAllAlcohols,
  getAlcohol,
  //   getAlcoholByName,
} = require("../queries/alcohols");

//INDEX
alcohol.get("/", async (req, res) => {
  const allAlcohols = await getAllAlcohols();
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

// SHOW BY CATEGORY
alcohol.get("/:name", async (req, res) => {
  const { name } = req.params;
  const alcohol = await getAlcoholByName(name);
  if (alcohol.name) {
    res.json({ success: true, payload: alcohol });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

module.exports = alcohol;
