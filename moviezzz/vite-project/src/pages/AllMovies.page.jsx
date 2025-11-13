import { useMovies } from "../hooks/useMovie.js";
import ListMovieCards from "../components/moviesComps/ListMovieCards.jsx";


export default function AllMoviesPage() {
  
  const {
    movies: moviesByIds,
    status: moviesStatus,
    error: moviesError,
  } = useMovies();

  if (moviesStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (moviesStatus === "failed") {
    return <div>Error: {moviesError}</div>;
  }

  return (
    <div>
      <ListMovieCards movies={moviesByIds} />
    </div>
  );
}
