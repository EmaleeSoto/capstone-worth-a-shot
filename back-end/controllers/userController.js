const express = require("express");
const db = require("../DB/dbConfig");
const user = express.Router();
const {
    getUser,
    deleteUser,
    createUser,
    updateUser,
    getUserInformation,
  } = require("../queries/users");


//INDEX
user.get("/", async (req, res) => {
    const allUsers = await db.any("SELECT * FROM users");
    res.json({ payload: allUsers });
  });
  
  //SHOW
  user.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await getUser(id);
    if (user.id) {
      res.json({ success: true, payload: user });
    } else {
      res.status(404).json({ success: false, payload: "not found" });
    }
  });
  
  //CREATE
  user.post("/", async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.json({ success: true, payload: user });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, payload: "server cannot process request" });
    }
  });

  //LOGIN
  user.post("/login", async (req, res) => {
    try {
      const userLogin = await getUserInformation(req.body.username)
      console.log(req.body.username, userLogin)
    if (userLogin === null) {
      res.status(400).json({Error: "Username not found."})
    } else if (req.body.password !== userLogin.password) {
      res.status(400).json({ Error: "Invalid Password."})
    } else if (req.body.password === userLogin.password) {
      res.status(200).json({ success: true, payload: userLogin})
    }
    } catch (error) {
      res.status(400).json({ error: error })
    }
  })
  
  // UPDATE
  user.put("/:id", async (req, res) => {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.json({ success: true, payload: user });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  //DELETE
  user.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
      if (deletedUser.id) {
        res.status(200).json({ success: true, payload: deletedUser });
      } else {
        res.status(404).json({ success: false, payload: "User not found" });
      }
    } else {
      console.error(deletedUser);
      res.status(500).json({ success: false, payload: "server error" });
    }
  });
  
  module.exports = user;
  