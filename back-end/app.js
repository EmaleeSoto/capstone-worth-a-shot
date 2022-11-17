// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const userController = require("./controllers/userController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/users", userController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Worth a Shot!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
