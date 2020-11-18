import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Afterreview extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Thank you for your review.</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
