import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SerchBar extends Component {
    state = {
      query: '',
    }

    handleChange = (e) => {
      this.setState({
        query: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      this.props.onSubmit(this.state.query)

      this.setState({query: ''})
    }

    render() {
        return (
          <>
            <form className="SearchForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Search movie"
                onChange={this.handleChange}
              />

              <button type="submit">
                <span>Search</span>
              </button>
            </form>
          </>
        );
    }
}

SerchBar.proptype = {
  onSubmit: PropTypes.func.isRequired,
}