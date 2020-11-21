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

//Search based on address
router.get("/find/:query", async (req, res) => {
  try {
    var query = req.params.query;
    const search = { address: query };
    const house = await Review.findOne(search);
    console.log(house);
    res.json(house);
  } catch (err) {
    res.json(err);
  }
});

//Get a specific review
router.get("/:reviewId", async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    res.json(review);
  } catch (err) {
    res.json(err);
  }
});

//Post a review to a new address
router.post("/", async (req, res) => {
  const review = new Review({
    address: req.body.address,
    title: [req.body.title],
    review: [req.body.review],
  });

  try {
    const savedReview = await review.save();
    res.json(savedReview);
  } catch (err) {
    res.json(err);
  }
});

//Add a review to existing address
router.put("/:reviewId", async (req, res) => {
  try {
    let result = await Review.updateOne(
      { _id: req.params.reviewId },
      { $push: { review: req.body.review, title: req.body.title } }
    );
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
});

//Delete a review
router.delete("/:reviewId", async (req, res) => {
  try {
    const removedReview = await Review.remove({ _id: req.params.reviewId });
    res.json(removedReview);
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:reviewId", async (req, res) => {
  try {
    const patchedReview = await Review.updateOne(
      { _id: req.params.reviewId },
      { $set: { title: req.body.title } }
    );
    res.json(patchedReview);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
