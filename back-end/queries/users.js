const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const getUserbyFirebase = async (firebase_id) => {
  try {
    const oneUser = await db.one(
      "SELECT * FROM users WHERE firebase_id=$1",
      firebase_id
    );
    return oneUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const oneUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return oneUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createUser = async ({
  name,
  age,
  zip_code,
  gender,
  personality,
  flavors,
  atmosphere,
  firebase_id,
}) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (name, age, gender, zip_code, personality, flavors, atmosphere, firebase_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        name,
        age,
        gender,
        zip_code,
        personality,
        flavors,
        atmosphere,
        firebase_id,
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  id,
  { name, age, gender, zip_code, personality, flavors, atmosphere, firebase_id }
) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET name=$1, age=$2, gender=$3, zip_code=$4, personality=$5, flavors=$6, atmosphere=$7, firebase_id=$8 where id=$9 RETURNING *",
      [
        name,
        age,
        gender,
        zip_code,
        personality,
        flavors,
        atmosphere,
        firebase_id,
        id,
      ]
    );
    return updateUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getUserbyFirebase,
  deleteUser,
  createUser,
  updateUser,
};
