const express = require("express");
const db = require("../db/dbConfig");
const alcohol = express.Router();
const {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
} = require("../queries/alcohols");

//INDEX
alcohol.get("/", async (req, res) => {
  const allAlcohols = await getAllAlcohols();
  console.log("Yay");
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
alcohol.get("/category/:category", async (req, res) => {
  console.log("yay");
  const { category } = req.params;
  console.log(category);
  const alcohols = await getAlcoholByCategory(category);
  console.log(alcohols);
  if (alcohols) {
    res.json({ success: true, payload: alcohols });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

module.exports = alcohol;
