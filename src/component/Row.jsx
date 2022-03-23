import React from 'react'
import '.Row.css'

function Row({title, movies}) {
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="row-items">
         {movies.map(movie => (
          <h1>{movie.Title}</h1>
        ))}
        </div>
    </div>
  )
}

export default Row