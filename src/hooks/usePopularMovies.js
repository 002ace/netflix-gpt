import { useEffect  } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
             getNowPlayMovie();
    } , [])
     
    const getNowPlayMovie =  async()=>{
      const data  =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
  
      const json =  await data.json();
       
      console.log(json.results);
  
      dispatch(addPopularMovies(json.results));
  
    }
  
}

export default  usePopularMovies