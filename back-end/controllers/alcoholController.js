const express = require("express");
const db = require("../db/dbConfig");
const alcohol = express.Router();
const {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
  getAlcoholByType,
  getAlcoholByFlavor,
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
  const { category } = req.params;
  const alcohols = await getAlcoholByCategory(category);
  if (alcohols) {
    res.json({ success: true, payload: alcohols });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// SHOW BY TYPE
alcohol.get("/type/:type", async (req, res) => {
  const { type } = req.params;
  const alcohols = await getAlcoholByType(type);
  if (alcohols) {
    res.json({ success: true, payload: alcohols });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// SHOW BY FLAVOR
alcohol.get("/flavors/:flavor", async (req, res) => {
  const { flavor } = req.params;
  const alcohols = await getAlcoholByFlavor(flavor);
  if (alcohols) {
    res.json({ success: true, payload: alcohols });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

module.exports = alcohol;
