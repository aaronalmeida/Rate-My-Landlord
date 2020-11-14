const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoute = require("./Routes/review");

require("dotenv/config");
const app = express();

//MIDDLEWARES
app.use(bodyParser.json());
app.use("/Review", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Home page lol");
});

//Connect to DB
mongoose.connect(
  process.env.DB_Connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//HOW WE LISTEN
app.listen(3001);
