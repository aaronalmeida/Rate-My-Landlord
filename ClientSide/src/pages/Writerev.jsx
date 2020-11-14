import React, { Component } from "react";
import axios from "axios";
import Searchbox from "../components/Searchbox";
import ReviewForm from "../components/Reviewform";
import Button from "react-bootstrap/Button";

export default class WriteReview extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      title: "",
      review: "",
    };
  }

  callbackFunction = (childData) => {
    this.setState({
      address: childData.address,
      title: childData.title,
      review: childData.review,
    });

    axios
      .post("/review", {
        title: childData.title,
        address: childData.address,
        review: childData.review,
      })
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <h1> Write A Review</h1>
        <ReviewForm parentCallback={this.callbackFunction} />
        <div>The house address is: {this.state.address}</div>
        <div>The review title is: {this.state.title}</div>
        <div>The house review is: {this.state.review}</div>
      </div>
    );
  }
}
