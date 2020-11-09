import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Searchbox() {
  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Enter Address" aria-label="Search Address" />
      <InputGroup.Append>
        <Button variant="outline-secondary">Go</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
