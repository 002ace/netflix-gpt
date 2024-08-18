import React from 'react'
import { bgImg } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const GptSearch = () => {
  return (
    
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-800">
    <img
      className="absolute inset-0 w-full h-full object-cover -z-10"
      src={bgImg}
      alt="background"
    
    />
    <div className="relative z-10 flex justify-center items-center p-4">
      <GptSearchBar />
    </div>
    <div className="relative z-10 mt-8">
      <GptMoviesSuggestion />
    </div>
  </div>

  
  )
}

export default GptSearch