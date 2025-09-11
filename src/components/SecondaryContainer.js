import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black text-white">
        <div className="relative z-20 text-white px-8 -translate-y-60">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          ></MovieList>
          <MovieList
            title={"Popular"}
            movies={movies.nowPopularMovies}
          ></MovieList>
          <MovieList
            title={"Horror"}
            movies={movies.nowPlayingMovies}
          ></MovieList>
          <MovieList
            title={"Sci-Fi"}
            movies={movies.nowPlayingMovies}
          ></MovieList>
        </div>
      </div>
    )
  );
}

export default SecondaryContainer