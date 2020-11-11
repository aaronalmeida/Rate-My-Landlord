const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");


router.get("/", (req, res) => {
  res.send("Review page lols");
});

router.get("/specific", (req, res) => {
  res.send("Review page specific lol");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
