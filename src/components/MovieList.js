// port React from 'react'
// import MovieCard from './MovieCard';
// const MovieList = ({title , movie}) => {
//     console.log("movie - list" , movie);
//     console.log(movie[2].poster_path);
//   return (im
//     <div  className='flex'>
//          <h1>{title}</h1>
//         <div  className='flex overflow-x-scroll'>
       
//               {
//                   movie.map((movie)=>(<MovieCard key = {movie.id}  posterPath = {movie.poster_path}/>))
//               }

           
       
        
//         </div>
//     </div>
//   )
// }

// export default MovieList


import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movie }) => {
  return (
    <div className="bg-black p-6  -mt-9">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>
      <div className="flex overflow-x-scroll space-x-6 scrollbar-hide">
        {movie.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} className="" />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
