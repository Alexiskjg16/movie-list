import React, { Component } from 'react'
import MovieTitles from './movies.js'
import movie from './movies.json'





class MovieList extends Component {
    render() {
        console.log(movie)
      return (
        <section className="MovieList">
          <ul>
            {movie.results.map((movie, idx) => {
              return <MovieTitles name={movie.title} image={movie.image} bio={movie.details} key={idx} />
            })}
          </ul>
        </section>
      )
    }
  }

  export default MovieList
  