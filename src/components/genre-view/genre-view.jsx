import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import "./genre-view.scss";

export class GenreView extends React.Component {
  render() {
    const { Genre, onBackClick, movies } = this.props;

    return (
      <Container className="genre-container">
        <Card>
          <Card.Header>
            <h4>{Genre.Name}</h4>
          </Card.Header>
          <Card.Body>
            <div>
              <span className="label">Description: </span>
              <span className="value">{Genre.Description}</span>
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

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};
