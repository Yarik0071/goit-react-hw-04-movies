import React, { Component } from 'react'
import PropTypes from 'prop-types'
import creditsAPI from '../services/api.js'

export default class Cast extends Component {
    state = {
        cast: {}
    }

    componentDidMount() {
        creditsAPI.fetchInfoWithId(this.props.match.params.movieId, 'credits')
        .then(result => this.setState({ cast: result.cast }))
    }

    render() {
      const { cast } = this.state
        return (
          <>
            <section>
              {cast.length > 0 && 
                <ul className='castList'>
                  {cast.map((item) => 
                  <li key={item.id} id={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt={item.name}/>
                  <h3>{item.name}</h3>
                    <p>{`Character: ${item.character}`}</p>
                  </li>
                  )}
                  </ul>
              }
            </section>
          </>
        );
    }
}

Cast.proptype = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}