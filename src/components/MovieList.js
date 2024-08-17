import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({title , movie}) => {
 
  

  return (
    

<div className="bg-black text-white py-6 px-4 md:px-8 lg:px-12">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 border-b-4 border-red-600 pb-2 text-center">
  {title}
</h1>
<div className="flex flex-col items-center sm:items-start overflow-x-scroll pb-4 no-scrollbar">
  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4"
      
  >
    {movie.map((movie) => (
      <MovieCard key={movie.id} poster_path={movie.poster_path} />
    ))}
  </div>
</div>
</div>
  
  )
}

export default MovieList