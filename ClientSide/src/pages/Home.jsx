import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      outputMessage: "",
    };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  sendData = async () => {
    const res = await axios.get("review/find/" + this.state.address);
    console.log(res.data);
    if (res.data == null) {
      this.setState({
        outputMessage: "house does not exist",
      });
    } else {
      this.setState({
        id: res.data._id,
      });
      console.log(this.state.id);
      this.props.history.push("housereview/" + this.state.id);
    }
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
        <div>{this.state.outputMessage}</div>
      </div>
    );
  }
}

export default withRouter(Home);
