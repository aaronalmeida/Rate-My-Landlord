import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useParams, withRouter } from "react-router-dom";

class Housereview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      address: "",
      review: "not yet",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
  }

  fetchData = (id) => {
    axios
      .get("/review/" + id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          address: response.data.address,
          review: response.data.review,
        });
      })
      .catch(function (error) {
        console.log(error);
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

export default withRouter(Housereview);
