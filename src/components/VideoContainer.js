import { useSelector } from 'react-redux'
import useTrailer from '../hooks/useTrailer'


const VideoContainer = ({movieId , title , view}) => {
   
     const trailerVideo  = useSelector((store)=>store.movies?.trailerVideo);
     console.log("trailer-video" , trailerVideo);

    useTrailer(movieId)
  return (
     
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden  shadow-lg">
    {/* Video Iframe */}
    <iframe
      className="absolute top-0 left-0 w-full h-full  aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>

    {/* Overlay Content */}
    <div className="absolute inset-y-0 left-0 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-10  rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 sm:mb-3 md:mb-4 lg:mb-5 truncate">{title}</h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-10">{view}</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded hover:bg-red-700 transition">
          Play
        </button>
        <button className="bg-gray-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded hover:bg-gray-700 transition">
          More Info
        </button>
      </div>
    </div>
  </div>
    
  )
}

export default VideoContainer