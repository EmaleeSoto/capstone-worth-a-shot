const db = require("../db/dbConfig.js");
//Will not be allowing for user Update/Create/Delete, only Get requests

const getAllAlcohols = async () => {
  try {
    const allAlcohols = await db.any("SELECT * FROM alcohols");
    console.log(allAlcohols, db);
    return allAlcohols;
  } catch (error) {
    return error;
  }
};

const getAlcohol = async (id) => {
  try {
    const oneAlcohol = await db.one("SELECT * FROM alcohols WHERE id=$1", id);
    return oneAlcohol;
  } catch (error) {
    return error;
  }
};

const getAlcoholByCategory = async (category) => {
  try {
    const alcohols = await db.any(
      "SELECT * FROM alcohols WHERE category=$1",
      category
    );
    return alcohols;
  } catch (error) {
    return error;
  }
};

const getAlcoholByType = async (type) => {
  try {
    const alcohols = await db.any("SELECT * FROM alcohols WHERE type=$1", type);
    return alcohols;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
  getAlcoholByType,
};
