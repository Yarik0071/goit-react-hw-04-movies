import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import movieAPI from '../services/api.js'
import { NavLink, Route } from 'react-router-dom'


export default class MovieDetailsPage extends Component {
    state = {
        movie: [],
        genres: [],
    }

    componentDidMount() {
        movieAPI
          .fetchMovieWithId(this.props.match.params.movieId)
          .then((result) =>
            this.setState({
              movie: result,
              genres: result.genres,
            })
          );
    }

    handleGoBack = () => {
      const { state } = this.props.location

      if(state && state.from) {
       return this.props.history.push(state.from)
      }

      this.props.history.push('/')
    }

    render() {
        const { movie, genres } = this.state 

         return (
           <>
             <button type='button' onClick={this.handleGoBack}>
               Go back
             </button>

             <section className="sectionMovieDetails">
               <div className='img'>
                 <img
                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                   alt={movie.original_title}
                 />
               </div>
               <ul>
                 <li>
                   <h2>{`${movie.original_title} (${movie.release_date})`}</h2>
                   <p>{`Rating: ${movie.vote_average}`}</p>
                 </li>
                 <li>
                   <h3>Overview:</h3>
                   <p className='ovirview'>{movie.overview}</p>
                 </li>
                 <li>
                   <h3>Genres:</h3>
                   <ul  className='genresList'>
                     {genres.map((item) => (
                       <li key={item.id} id={item.id}>
                         <p>{item.name}</p>
                         </li>
                     ))}
                   </ul>
                 </li>
               </ul>
             </section>

             <hr />
             <section>
             <ul>
               <li>
                 <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
               </li>
               <li>
                 <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
               </li>
             </ul>
             </section>
             <hr />

             <Route path={`/movies/:movieId/cast`} component = {lazy(() => import('../views/cast'))}/>
             <Route path={`/movies/:movieId/reviews`} component = {lazy(() => import('../views/reviews'))} />
            </>
         );
    }
}

MovieDetailsPage.proptype = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}