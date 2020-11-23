import React, { Component } from 'react'
import movieAPI from '../services/api.js'
import { NavLink } from 'react-router-dom'

export default class HomaPage extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    movieAPI.fetchMovieDetails().then(movies => this.setState({ movies }))
  }

  render() {
    const { movies } = this.state

    return (
      <>
        <h1>Tranding today:</h1>

        {movies.length > 0 && (
          <ul>
            {movies.map((item) => (
              <li key={item.id} id={item.id}>
                <NavLink
                  to={{
                    pathname: `/movies/${item.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {item.original_title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}