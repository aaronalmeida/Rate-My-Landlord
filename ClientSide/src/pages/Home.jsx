import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
    };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  sendData = () => {
    axios.get("/find/" + this.state.address).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <h1> Home</h1>
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={this.handleChange}
        />
        <button onClick={this.sendData}> Search </button>
        <div>The house address is: {this.state.address}</div>
      </div>
    );
  }
}
