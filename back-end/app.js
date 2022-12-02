// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const userController = require("./controllers/userController");
const userEstablishmentsController = require("./controllers/userEstablishmentsController");
const alcoholController = require("./controllers/alcoholController");
const barsController = require("./controllers/barsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/users", userController);
app.use("/userestablishments", userEstablishmentsController);
app.use("/alcohols", alcoholController);
app.use("/bars", barsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Worth a Shot!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// app.get("/bars", (req, res) => {
//   // let myUser = db.finderUserById(req.params.userId);
//   let response = axios.get(
//     `https://api.yelp.com/v3/businesses/search?location=NYC&category=nightlife`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//         // Origin: "localhost",
//         // withCredentials: true,
//       },
//     }
//   );
// });

// EXPORT
module.exports = app;
