import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./director-view.scss";

export class DirectorView extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container className="director-view">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{director.Name}</Card.Title>
                <Card.Text>
                  <span className="label">Bio:</span>
                  <span className="value">{director.Bio}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
