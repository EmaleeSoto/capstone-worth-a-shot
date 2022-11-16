const db = require("../DB/dbConfig.js");

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

const getUserInformation = async (name) => {
  try {
    const loggedUser = await db.one("SELECT * FROM users WHERE name=$1, password=$2", name)
    return loggedUser;
  } catch (error) {
    console.log(error.message || error);
    return null
  }
}

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
  password,
  age,
  zip_code,
  gender
}) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (name, password, age, zip_code, gender) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, password, age, zip_code, gender]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  id,
  { name, password, age, zip_code, gender }
) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET name=$1, password=$2, age=$3, zip_code=$4, gender=$5 where id=$4 RETURNING *",
      [name, password, age, zip_code, gender, id]
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
