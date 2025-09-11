import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log("printing Movies",movies);
    return (
        <div >
            <h1 className='text-3xl py-2 text-bold text-white'>{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex flex-row">
            {movies?.map(movie => (
                <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
              ></MovieCard>
            ))}
          </div>
        </div>
      </div>
    );
}

export default MovieList