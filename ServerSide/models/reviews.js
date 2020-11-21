const mongoose = require("mongoose");

// const childSchema = mongoose.Schema({
//   title: { type: String, required: true },
//   review: { type: String, required: true },
// });

const ReviewSchema = mongoose.Schema({
  address: { type: String, required: true },
  review: [{ type: String, required: true }],
  title: [{ type: String, required: true }],
});

module.exports = mongoose.model("Reviews", ReviewSchema);
