import { Grid, Divider, Typography } from "@mui/material";

import MovieCard from "./MovieCard.jsx";

export default function ListMovieCards({ movies }) {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
      sx={{ backgroundColor: "#232324ff", py: 4, borderRadius: 4 }}
    >
      {movies.length !== 0 ? (
        movies.map((movie) => (
          <Grid key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
            <Divider sx={{ backgroundColor: "GrayText", color: "InfoText" }}>
              {movie.year}
            </Divider>
          </Grid>
        ))
      ) : (
        <Typography color="green">No result</Typography>
      )}
    </Grid>
  );
}
