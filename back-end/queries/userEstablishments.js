const db = require("../db/dbConfig.js");

const getAllUserEstablishments = async () => {
  try {
    const allUserEstablishments = await db.any(
      "SELECT * FROM user_establishments"
    );
    return allUserEstablishments;
  } catch (error) {
    return error;
  }
};

const getEstablishmentByUserId = async (id) => {
  try {
    const oneUserEstablishment = await db.any(
      "SELECT * FROM user_establishments WHERE user_uid=$1",
      id
    );
    return oneUserEstablishment;
  } catch (error) {
    return error;
  }
};

const createUserEstablishment = async ({ user_uid, yelp_id }) => {
  try {
    const newUserEstablishment = await db.one(
      "INSERT INTO user_establishments (user_uid, yelp_id) VALUES ($1, $2) RETURNING *",
      [user_uid, yelp_id]
    );
    return newUserEstablishment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserEstablishments,
  getEstablishmentByUserId,
  createUserEstablishment,
};
