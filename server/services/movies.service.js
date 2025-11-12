import movies from "../DB/movies.json" with { type: "json" };
import { filterItemsByChars } from "../DB/utils.js";

export function getAllMovies() {
  return movies;
}

export function getMoviesByFilters({ name = '', year = '', genre = '' }) {
  let filteredMovies = movies;

  if (name) {
    filteredMovies = filterItemsByChars(filteredMovies, name);
  }

  if (year) {
    filteredMovies = filteredMovies.filter(movie =>
      String(movie.year) === String(year)
    );
  }

  if (genre) {
    filteredMovies = filteredMovies.filter(movie =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  
  return filteredMovies;
}

export function getMovieById(movieId) {
  const movie = movies.filter((m) => m.id.toString() === movieId.toString());
  return movie;
}