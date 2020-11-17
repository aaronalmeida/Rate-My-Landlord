import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      id: "",
    };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  sendData = async () => {
    const res = await axios.get("review/find/" + this.state.address);
    this.setState({
      id: res.data._id,
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
        <div>The house address is: {this.state.id}</div>
      </div>
    );
  }
}
