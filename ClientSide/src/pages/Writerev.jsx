import React, { Component } from "react";
import axios from "axios";
import ReviewForm from "../components/Reviewform";
import { withRouter } from "react-router-dom";

class WriteReview extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      title: "",
      review: "",
    };
  }

  sendData = async () => {};

  callbackFunction = async (childData) => {
    this.setState(
      {
        address: childData.address,
        title: childData.title,
        review: childData.review,
      },
      async function () {
        const res = await axios.get("review/find/" + this.state.address);
        console.log(res);
        if (res.data != null) {
          await axios
            .put("/review/" + res.data._id, {
              title: childData.title,
              address: childData.address,
              review: childData.review,
            })
            .then((response) => {
              console.log(response);
            });
        } else {
          await axios
            .post("/review", {
              title: childData.title,
              address: childData.address,
              review: childData.review,
            })
            .then((response) => {
              console.log(response);
            });
        }

        this.props.history.push("thankyou/");
      }
    );
  };

  render() {
    return (
      <div>
        <h1> Write A Review</h1>
        <ReviewForm parentCallback={this.callbackFunction} />
      </div>
    );
  }
}

export default withRouter(WriteReview);
