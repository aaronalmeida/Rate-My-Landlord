import React, { Component } from "react";
import axios from "axios";

export default class Housereview extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      address: "",
      review: "not yet",
    };
  }

  componentDidMount = () => {
    axios.get("/review/:reviewId").then((response) => {
      this.setState({
        title: response.data.title,
        address: response.data.address,
        review: response.data.review,
      });
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <div>The house address is: {this.state.address}</div>
        <div>The review title is: {this.state.title}</div>
        <div>The house review is: {this.state.review}</div>
      </div>
    );
  }
}
