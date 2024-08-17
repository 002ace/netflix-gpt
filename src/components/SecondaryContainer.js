import React from 'react'

import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movie =  useSelector((store)=>store.movies?.nowPlayingMovies)
    const popularMovies = useSelector((store)=>store.movies?.popularMovies);
    const topMovies = useSelector((store)=>store.movies?.topRated);
    const upcomingMovies = useSelector((store)=>store.movies?.upcoming);
    if(!movie) return 
  
    if(!popularMovies) return ;
    if(!topMovies)  return ;
    if(!upcomingMovies) return ;

  return (
    <div>
        <MovieList   title = {"Now  playing Movies"}   movie = { movie}/>

        <MovieList   title = {"Popular movies"}   movie = { popularMovies}/>

        <MovieList   title = {"Top Rated"}   movie = { topMovies}/>

        <MovieList   title = {"Upcoming movies"}   movie = { upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer