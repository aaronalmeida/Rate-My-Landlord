import React from "react";
import Form from "react-bootstrap/Form";

export default function ReviewForm() {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Review Title</Form.Label>
        <Form.Control placeholder="Enter your title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write Your Review</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}
