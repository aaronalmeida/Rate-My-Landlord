import React, { Component } from "react";
import axios from "axios";
import { Link, useHistory, withRouter } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(this.state.id);
    this.props.history.push("housereview/" + this.state.id);
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

export default withRouter(Home);
