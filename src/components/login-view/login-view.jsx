import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import "./login-view.scss";

export function LoginView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username, Password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(Username);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className="loginCard" bg="dark">
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
              <Button variant="warning" type="submit" onClick={handleSubmit}>
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
