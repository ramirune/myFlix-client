import React from "react";
import { Navbar, Container, Nav, Button, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navbar-view.scss";
import logo from "../../img/myFlix_logo.png";
import { Link } from "react-router-dom";

export function NavBarView() {
  const Username = localStorage.getItem("user");

  onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  return (
    <Navbar className="navbar" variant="dark" expand="lg md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto navbar-menu">
            <Link to={`/user/${Username}`}>
              <NavItem style={{ color: "white" }} href="">
                User Profile
              </NavItem>
            </Link>
            <NavItem style={{ color: "grey", paddingLeft: "25px" }}>
              <p>( Logged in as: {Username} )</p>
            </NavItem>
          </Nav>

          <Nav.Link className="d-flex">
            <Button
              variant="danger"
              onClick={() => {
                this.onLoggedOut();
              }}
            >
              Logout
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
