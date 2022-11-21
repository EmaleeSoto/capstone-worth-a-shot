const db = require("../db/dbConfig.js");
//Will not be allowing for user Update/Create/Delete, only Get requests

const getAllAlcohols = async () => {
  try {
    const allAlcohols = await db.any("SELECT * FROM alcohols");
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

module.exports = {
  getAllAlcohols,
  getAlcohol,
};
