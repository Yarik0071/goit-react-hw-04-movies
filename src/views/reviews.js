import React, { Component } from 'react'
import PropTypes from 'prop-types'
import infoAPI from '../services/api.js'


export default class Reviews extends Component {
    state = {
        info: {}
    }

    componentDidMount() {
        infoAPI.fetchInfoWithId(this.props.match.params.movieId, 'reviews')
        .then(result => this.setState({info: result.results}))
    }

    render() {
        const { info } = this.state
        return (
          <div>
            {info.length > 0 ? (
              <ul className='reviewsList'>
                {info.map((item) => (
                  <li key={item.id}>
                    <h3>{`Author: ${item.author}`}</h3>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            )
          : 'uups, sorry but "NO REVIEWS"'
          }
          </div>
        );
    }
}

Reviews.proptype = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}