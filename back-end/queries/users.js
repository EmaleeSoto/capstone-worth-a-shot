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

const createUser = async ({ name, age, zip_code, gender }) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (name, age, zip_code, gender) VALUES($1, $2, $3, $4) RETURNING *",
      [name, age, zip_code, gender]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, { name, age, zip_code, gender }) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET name=$1, age=$2, zip_code=$3, gender=$4 where id=$3 RETURNING *",
      [name, age, zip_code, gender, id]
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
  deleteUser,
  createUser,
  updateUser,
  getUserInformation,
};
