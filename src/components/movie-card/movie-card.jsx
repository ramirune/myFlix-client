import React from "react";
import PropTypes from "prop-types";
import { CardGroup, Container, Row, Button, Card, Col } from "react-bootstrap";
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container style={{ display: "inline" }}>
        <Row>
          <Col>
            <CardGroup>
              <Card className="poster" bg="dark">
                <Card.Img variant="top" src={movie.ImagePath} height="350" />
                <Card.Body>
                  <Card.Title className="movie_title">{movie.Title}</Card.Title>
                  <div className="movie_genre">{movie.Genre.Name}</div>
                  {/* <Card.Text>{movie.Description}</Card.Text> */}
                  <Button
                    className="button"
                    variant="warning"
                    size="md"
                    onClick={() => onMovieClick(movie)}
                  >
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    //Director: PropTypes.array.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    //Genre: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
