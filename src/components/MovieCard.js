import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({ posterPath}) => {
    const imageUrl =   IMG_URL+ posterPath
    console.log(imageUrl)
  return (
    <div className="w-64 h-64 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
    <img src={imageUrl} alt="Movie Poster" className="w-full h-full object-cover rounded-lg" />
  </div>
  )
}

export default MovieCard