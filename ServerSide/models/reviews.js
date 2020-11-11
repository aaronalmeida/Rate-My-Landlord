const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  address: { type: String, required: true },
  title: { type: String, required: true },
  review: String,
});

module.exports = mongoose.model("Reviews", ReviewSchema);
