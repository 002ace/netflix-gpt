import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies  =  useSelector((state)=>state.movies?.nowPlayingMovies);
   


  return (
    <div>
        <MovieList  title = {"now playing"} movie  = {movies} />
    </div>
  )
}

export default SecondaryContainer