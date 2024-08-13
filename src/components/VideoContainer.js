import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'

const VideoContainer = ({movieId}) => {
  console.log("movieid" ,movieId)
//   const getMoviesVideo  = async ()=>{
          //currently api is not working
//       const data = await fetch( `https://api.themoviedb.org/3/tv/${movieId}/videos`, API_OPTION)

//       const json  =  await data.json()

//       console.log("json - data" , json);

//       const filterData =  json.results.filter((video) => video.type == "trailer");
//       const trailer =  filterData[0];


//   }

//   useEffect(()=>{
   
//       getMoviesVideo()

//   },[])
  const staticVideoUrl = 'https://www.youtube.com/embed/Idh8n5XuYIA?autoplay=1&controls=0&mute=1';



  return (
    // <div className='w  overflow-hidden'>
    //     <iframe className='w-screen aspect-video overflow-x-hidden '
    //      src= {staticVideoUrl}
    //       title="YouTube video player"
          
    //        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
    //        allowFullScreen
    //       >

    //        </iframe>

    // </div>
    <div className="w-full overflow-hidden mb-8">
    <iframe
      className="w-screen aspect-video"
      src={staticVideoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  </div>
   
  );


}

export default VideoContainer
