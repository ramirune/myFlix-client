import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Col, Row } from "react-bootstrap";
import "./registration-view.scss";

export function RegistrationView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username, Password, Email, Birthday);
    props.onRegistration(Username);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className="registrationCard" bg="dark">
            <Form className="register-card">
              <Form.Group controlId="formRegisterUsername">
                <Form.Label style={{ color: "white" }}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword">
                <Form.Label style={{ color: "white" }}>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBirthday">
                <Form.Label style={{ color: "white" }}>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  value={Birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="warning" type="submit" onClick={handleSubmit}>
                Register
              </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  registeration: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
