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

// const getAlcoholbyCategory = async (categoryName) => {
//   try {
//     const oneAlcohol = await db.one("SELECT * FROM alcohols WHERE category LIKE categoryName%" categoryName);
//     return oneAlcohol;
//   } catch (error) {
//     return error;
//   }
// };

//EXPERIMENTAL, MAY NOT NEED
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

module.exports = {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
};
