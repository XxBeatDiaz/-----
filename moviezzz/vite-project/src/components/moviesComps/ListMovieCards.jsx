import { Grid } from "@mui/material";
import MovieCard from "./MovieCard.jsx";


export default function ListMovieCards({ movies }) {
  return (
    <Grid container spacing={2.7} justifyContent="center" alignItems="stretch">
      {movies.map((movie) => (
        <Grid size={{sx:3}} key={movie.id}>
          <MovieCard id={movie.id} title={movie.title} poster_path={movie.poster_path} />
        </Grid>
      ))}
    </Grid>
  );
}
