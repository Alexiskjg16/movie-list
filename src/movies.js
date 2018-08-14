import React, { Component } from 'react'

class MovieTitles extends Component {
  render() {
    return (
      <li className="movie">
        <h2>{this.props.name}</h2>
        <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.poster_path} />
        <p>{this.props.bio}</p>
      </li>
    )
  }
}

export default MovieTitles