import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    //both will do the same if movies is empty or null then they return from here ohterwise there will be an error
    if (movies === null) return;
    //if (!movies) return;

    const mainMovies = movies[0];
    // console.log("this is the main movies", mainMovies);

    const {original_title, overview ,id } = mainMovies;
  return (
    <div>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} /> 
    </div>
  )
}

export default MainContainer