import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useMovies } from "../hooks/useMovie.js";
import { removeAll } from "../redux/slices/search.js";
import ListMovieCards from "../components/ListMovieCards.jsx";

export default function AllMoviesPage() {
  const dispatch = useDispatch();
  
  const {
    movies: moviesByIds,
    status: moviesStatus,
    error: moviesError,
  } = useMovies();
  
  function handleResetFilter() {
    dispatch(removeAll());
  }

  if (moviesStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (moviesStatus === "failed") {
    return <div>Error: {moviesError}</div>;
  }

  return (
    <div>
      <Button sx={{display: "flex", backgroundColor: "white", justifySelf: "center", alignSelf: "center"}} onClick={() => {handleResetFilter()}}>בטל סינון</Button>
      <ListMovieCards movies={moviesByIds} />
    </div>
  );
}
