import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const NowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json);

    //   console.log("printint", json.results);

      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}
export default NowPlayingMovies;
