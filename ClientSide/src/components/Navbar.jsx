import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Rate My Landlord
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/writeareview">
              Write A Review
            </Nav.Link>
            <Nav.Link as={Link} to="/account">
              Sign Up/Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
