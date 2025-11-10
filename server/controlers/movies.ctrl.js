import { getAllMovies, getMoviesByFilters } from "../services/movies.service.js";

export function getMovies(req, res) {
  const movies = getAllMovies();
  res.json(movies);
}

export function getMoviesByFiltersCtrl(req, res) {
  try {
    const { name = '', year = '', genre = '' } = req.query;

    const filteredMovies = getMoviesByFilters({ name, year, genre });
    res.json(filteredMovies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

export function getMoviesById(req, res) {
  const { movies } = getAllMovies();
  const movieId = req.params.id;
  const movie = movies.find(m => String(m.id) === String(movieId));
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
}
