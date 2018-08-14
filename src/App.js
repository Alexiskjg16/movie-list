import React, { Component } from 'react'
import MovieList from './movietitles.js'

class App extends Component {
  render() {
    const title = 'Movies from 1989'
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <MovieList />
        </header>
      </div>
    )
  }
}

export default App
