import React from "react";
import axios from "axios";

import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { setMovies, setFilter } from "../../actions/actions";
import MoviesList from "../movies-list/movies-list";

import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
//import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { NavBarView } from "../navbar-view/navbar-view";
import { GenreView } from "../genre-view/genre-view";
import { DirectorView } from "../director-view/director-view";
import { ProfileView } from "../profile-view/profile-view";
import { Container, Col, Row } from "react-bootstrap";

import "./main-view.scss";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  getUsers(token) {
    axios
      .get(`https://movie-api-by-tammy.herokuapp.com/users/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setUser(response.data);
        /* this.setState({
          users: response.data,
        }); */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getMovies(token) {
    axios
      .get(`https://movie-api-by-tammy.herokuapp.com/movies`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.props.setMovies(response.data);
        /* this.setState({
          movies: response.data,
        }); */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  onRegistration(registration) {
    this.setState({
      registration,
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    let { movies } = this.props;
    let { user, users } = this.state;

    return (
      <Router>
        <NavBarView />
        <>
          <Container className="body">
            <Row className="justify-content-md-center">
              <Route
                exact
                path="/"
                render={() => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView
                          onLoggedIn={(user) => this.onLoggedIn(user)}
                        />
                        <RegistrationView />
                      </Col>
                    );

                  if (movies.length === 0) return <div className="main-view" />;
                  return <MoviesList movies={movies} />;
                  /* return movies.map((m) => (
                    <Col sm={4} md={8} key={m._id}>
                      <MoviesList movies={movies} />
                    </Col>
                  )); */
                }}
              />
              <Route
                path="/movies/:Title"
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <Col>
                        <LoginView
                          onLoggedIn={(user) => this.onLoggedIn(user)}
                        />
                      </Col>
                    );
                  if (movies.length === 0) return <div className="main-view" />;
                  return (
                    <Col md={8}>
                      <MovieView
                        movies={movies}
                        movie={movies.find(
                          (m) => m.Title === match.params.Title
                        )}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  );
                }}
              />
              <Route
                exact
                path="/users/:Username"
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    );
                  if (movies.length === 0) return <div className="main-view" />;
                  return (
                    <ProfileView
                      history={history}
                      movies={movies}
                      users={users}
                      user={user}
                      onBackClick={() => history.goBack()}
                    />
                  );
                }}
              />
              <Route
                path="/directors/:Name"
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    );
                  if (movies.length === 0) return <div className="main-view" />;
                  return (
                    <Col md={8}>
                      <DirectorView
                        Director={
                          movies.find(
                            (m) => m.Director.Name === match.params.Name
                          ).Director
                        }
                        movies={movies}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  );
                }}
              />
              <Route
                path="/genres/:Name"
                render={({ match, history }) => {
                  if (!user)
                    return (
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    );
                  if (movies.length === 0) return <div className="main-view" />;
                  return (
                    <Col md={8}>
                      <GenreView
                        movies={movies}
                        Genre={
                          movies.find((m) => m.Genre.Name === match.params.Name)
                            .Genre
                        }
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  );
                }}
              />
            </Row>
          </Container>
        </>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { setMovies })(MainView);
