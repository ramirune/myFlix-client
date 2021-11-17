import React from "react";
import PropTypes from "prop-types";
import "./movie-view.scss";
import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieView extends React.Component {
  addToFavs() {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const movie = this.props;

    axios
      .post(
        `https://movie-api-by-tammy.herokuapp.com/users/${Username}/movies/${movie.MovieID}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container fluid className="moviesContainer">
        <Row className="justify-content-md-center">
          <Col>
            <div className="movie-view">
              <div
                className="movie-poster"
                style={{ textAlign: "center", marginBottom: "30px" }}
              >
                <img src={movie.ImagePath} crossOrigin="true" width="300" />
              </div>
              <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value" id="title">
                  {movie.Title}
                </span>
              </div>
              <div className="movie-director">
                <span className="label">Director: </span>
                <Link to={`/directors/${movie.Director}`}>
                  <span className="value">{movie.Director.Name}</span>
                </Link>
              </div>
              <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
              </div>
              <div className="movie-genre">
                <span className="label">Genre: </span>
                <Link to={`/genres/${movie.Genre}`}>
                  <span className="value">{movie.Genre.Name}</span>
                </Link>
              </div>

              <div className="alignCenter">
                <Button
                  size="lg"
                  variant="warning"
                  onClick={() => {
                    this.addToFavs();
                  }}
                >
                  Add Favorite
                </Button>
                <Button
                  className="back-button"
                  size="lg"
                  variant="danger"
                  onClick={() => {
                    onBackClick(null);
                  }}
                >
                  Go Back
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    //Genre: PropTypes.string,
    Director: PropTypes.array,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
