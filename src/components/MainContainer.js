import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const movies =  useSelector((state)=>state.movies?.nowPlayingMovies)
    // console.log('main-container' , movies);
    if(!movies) return ;
    const movieData =  movies[0];

    const {original_title ,  overview , id } =  movieData ; 

  return (
    <div>
        <VideoTitle   title = {original_title} view = {overview}/>
        <VideoContainer   movieId = {id}   title = {original_title} view = {overview}/>
        

    </div>
  )
}

export default MainContainer