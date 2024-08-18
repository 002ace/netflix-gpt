import React, { useRef } from 'react'
import gemni from '../utils/geminiai';
import { useDispatch, useSelector } from 'react-redux';
import GptMoviesSuggestion from './GptMoviesSuggestion';

const GptSearchBar = () => {

     
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const handleGPtSearch = async()=>{

        console.log(searchText.current.value)

        const searchQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

         gemni(searchQuery, dispatch);
         

    }




  return (
        


      <div>
            <div className='mt-36 px-4'>
            <form className="flex items-center space-x-4 w-full max-w-3xl" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="flex-grow p-4 text-white bg-gray-700 bg-opacity-70  placeholder-gray-400 focus:outline-none w-full sm:w-[30rem]"
          placeholder="What do you want to search?"
        />
        <button
          
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-sm sm:text-base"
          onClick={handleGPtSearch}
        >
          Search
        </button>
      </form>
               
            </div>

           
    </div>
        

        
    
    
  )
}

export default GptSearchBar




