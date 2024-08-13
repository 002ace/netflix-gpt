import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';
import SecondaryContainer from './SecondaryContainer';


const MainContainer = () => {
  
      const movie  = useSelector((state) => state.movies?.nowPlayingMovies)
      if(!movie) return ;
      const mainMovie = movie[0] ; 
      console.log(mainMovie)

      const {original_title , overview , id} = mainMovie ;
     
        

  return (
    <div>
           <VideoContainer  movieId = {id}/>
           <VideoTitle   title = {original_title }  overview = {overview}/>
           <SecondaryContainer/>
    </div>
  )
}

export default MainContainer