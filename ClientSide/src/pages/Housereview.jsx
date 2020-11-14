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

  handleButtonClick = () => {
    axios.get("/review").then((response) => {
      this.setState({
        title: response.data[1].title,
        address: response.data[1].address,
        review: response.data[1].review,
      });
      console.log(response.data[1].review);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}> get data</button>
        <div>The house address is: {this.state.address}</div>
        <div>The review title is: {this.state.title}</div>
        <div>The house review is: {this.state.review}</div>
      </div>
    );
  }
}
