import React from 'react';
import axios from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './favorite-view.scss'
export class FavoriteMovies extends React.Component {

    render() {
        const { movie, removeFav, fav } = this.props;
        // const { Movies, ImagePath, Description } = this.state;

        function favRemoved() {
            alert(`${movie.Title} has been removed.`)
        }

        console.log(movie);

        return (
            <Card className="fav-movie-card">
                <Card.Img variant="top" className="card-img" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text className="text">{movie.Description}</Card.Text>
                    <Row>
                        <Col className="fav-movie-buttons">
                            <Button variant="link" onClick={() => { removeFav(movie._id), favRemoved(), location.reload() }}>Remove from favs</Button>
                            <Link to={`/movies/${movie._id}`}>
                                <Button variant="link">See more</Button>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        );
    }
}

FavoriteMovies.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string,
        Director: PropTypes.string,
        ImagePath: PropTypes.string,
    }).isRequired
};