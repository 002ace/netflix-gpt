// import React from 'react'

// const VideoTitle = ({title , overview}) => {
//   return (
//     <div>
//         <h1>{title}</h1>
//         <p>{overview}</p>
//         <div>
//             <button>Play</button>
//             <button>More info</button>
//         </div>
//     </div>
//   )
// }

// export default VideoTitle


const VideoTitle = ({ title, overview }) => {

    console.log(title);
    return (
    //     <div className="space-y-4 max-w-screen-lg ml-12 mt-20 text-black absolute">
    //     <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
    //       {title}
    //     </h1>
    //     <p className="text-lg lg:text-xl text-gray-700 max-w-lg leading-snug">
    //       {overview}
    //     </p>
    //     <div className="flex space-x-4 mt-6">
    //       <button className="bg-black text-white font-semibold py-2.5 px-8 rounded-sm hover:bg-gray-800 transition duration-200">
    //         Play
    //       </button>
    //       <button className="bg-transparent text-black font-semibold py-2.5 px-8 rounded-sm border border-black hover:bg-gray-300 transition duration-200">
    //         More info
    //       </button>
    //     </div>
    //   </div>
    <div className="absolute bottom-16 left-12 space-y-4 max-w-2xl text-black">
    <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
      {title}
    </h1>
    <p className="text-lg lg:text-xl text-gray-300 leading-snug mb-6">
      {overview}
    </p>
    <div className="flex space-x-4">
      <button className="bg-red-600 text-white font-semibold py-2.5 px-8 rounded-sm hover:bg-red-700 transition duration-300">
        Play
      </button>
      <button className="bg-gray-800 text-white font-semibold py-2.5 px-8 rounded-sm border border-gray-400 hover:bg-gray-700 transition duration-300">
        More Info
      </button>
    </div>
  </div>
    );
  };
  
  export default VideoTitle;
  