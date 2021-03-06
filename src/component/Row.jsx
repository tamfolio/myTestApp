import React from 'react'
import './Row.css'

function Row({title, movies}) {
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="row-items">
         {movies && Array.isArray(movies) && movies.length ? movies.map(movie => (
           <img className='row-item' src={movie.Poster} alt="" key={movie.imdbID} />
        )): movies && movies.Poster ? <img src={movies.Poster} alt=''/>: <p>No Result Found</p>}
        
        </div>
    </div>
  )
}

export default Row