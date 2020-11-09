import React from "react";
import NavBar from "../components/Navbar";
import Searchbox from "../components/Searchbox";
import ReviewForm from "../components/Reviewform";

function WriteReview() {
  return (
    <div>
      <NavBar />
      <Searchbox />
      <br />
      <ReviewForm />
    </div>
  );
}

export default WriteReview;
