import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import "./login-view.scss";
import axios from "axios";

export function LoginView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post(`https://movie-api-by-tammy.herokuapp.com/login`, {
        Username: Username,
        Password: Password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user");
        alert("User was not found!");
      });
  };

  return (
    <Container className="login-container">
      <Row>
        <Col></Col>
        <Col>
          <Card className="loginCard">
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label style={{ color: "white" }}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label style={{ color: "white" }}>Password:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Log In
              </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
