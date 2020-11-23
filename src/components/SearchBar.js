import React, { Component } from 'react'

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
                // autoComplete="off"
                // autoFocus
                placeholder="Search movie"
                // value={}
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