import React,{useContext} from 'react';
import {MovieContext} from './MovieContext'

function Nav() {
    const [movies, setMovies]=useContext(MovieContext)
  return (
    <div className='nav'>
        <h3>Dev Favourites</h3>
        <p>List of Movies: {movies.length} </p>
    </div>
  )
}

export default Nav