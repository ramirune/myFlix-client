import React from "react";
import PropTypes from "prop-types";

import { Container, Card, Button } from "react-bootstrap";

import "./director-view.scss";

export class DirectorView extends React.Component {
  render() {
    const { Director, onBackClick } = this.props;

    return (
      <Container className="director-container">
        <Card>
          <Card.Header>
            <h4>Director</h4>
          </Card.Header>
          <Card.Body>
            <div>
              <span className="label">Name: </span>
              <span className="value">{Director.Name}</span>
            </div>
            <div>
              <span className="label">Bio: </span>
              <span className="value">{Director.Bio}</span>
            </div>
            <div>
              <span className="label">Born: </span>
              <span className="value">{Director.Birth}</span>
            </div>
            <div>
              <span className="label">Death: </span>
              <span className="value">{Director.Death}</span>
            </div>
            <div className="backButton">
              <Button
                size="md"
                variant="warning"
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

DirectorView.proptypes = {
  Director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string,
    Birth: PropTypes.number,
    Death: PropTypes.number,
  }).isRequired,
};
