const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");

//Gets back all the reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.json(err);
  }
});

router.get("/specific", (req, res) => {
  res.send("Review page specific lol");
});

router.post("/", async (req, res) => {
  const review = new Review({
    address: req.body.address,
    title: req.body.title,
    review: req.body.review,
  });

  try {
    const savedReview = await review.save();
    res.json(savedReview);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
