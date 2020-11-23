import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../components/SearchBar.js'
import Api from '../services/api.js'
import getQueryString from '../utils/getQueryParams.js'


export default class HomaPage extends Component {

    state = {
      movies: []
    }

    componentDidMount() {
        const { query } = getQueryString(this.props.location.search)

        if(query) {
            this.fetchMovies(query)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery} = getQueryString(prevProps.location.search)
        const { query: nextQuery } = getQueryString(this.props.location.search)

        if(nextQuery !== prevQuery) {
            this.fetchMovies(nextQuery)
        }
    }

    handleChangeQuery = query => {
       this.props.history.push({
           pathname: this.props.location.pathname,
           search: `query=${query}`
       })
    }

    fetchMovies = (query) => {
        Api.fetchWithSearch(query)
            .then(result => this.setState({movies: result.results}))
    }
  
    render() {
      const { movies } = this.state
      const { match } = this.props
  
      return (
        <>
        <SearchBar onSubmit={this.handleChangeQuery}/> 

          {movies.length > 0 && (
            <ul>
              {movies.map((item) => (
                <li key={item.id} id={item.id}>
                  <NavLink to={{
                      pathname: `${match.url}/${item.id}`, 
                      state: { from: this.props.location }
                      }}>
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