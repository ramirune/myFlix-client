import React from "react";
import PropTypes from "prop-types";
import { CardGroup, Container, Row, Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div className="mvcard">
        <Container className="moviecardContainer" style={{ display: "inline" }}>
          <Row>
            <Col>
              <CardGroup>
                <Card className="poster">
                  <Card.Img
                    className="movie-img"
                    variant="top"
                    src={movie.ImagePath}
                    height="350"
                  />
                  <Card.Body>
                    <Card.Title className="movie_title">
                      {movie.Title}
                    </Card.Title>
                    <div className="movie_genre">{movie.Genre.Name}</div>
                    {/* <Card.Text>{movie.Description}</Card.Text> */}
                    <Link to={`/movies/${movie.Title}`}>
                      <Button className="button" variant="danger" size="md">
                        Open
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
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
};
