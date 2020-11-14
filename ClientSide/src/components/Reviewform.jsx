import React, { Component } from "react";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      address: "",
      review: "",
    };
  }

  sendData = () => {
    console.log(this.state);
    this.props.parentCallback(this.state)
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="title"
            placeholder="Review Title"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            name="review"
            rows="4"
            cols="50"
            placeholder="Review"
            onChange={this.handleChange}
          ></textarea>
        </form>
        <button onClick={this.sendData}> Send Data</button>
      </div>
    );
  }
}
