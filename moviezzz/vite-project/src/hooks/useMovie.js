import { useSelector } from "react-redux";

import { moviesSelectors, selectManyByIds } from "../redux/slices/movies.js";

export function useSearchMovies() {
  const searchIds = useSelector((state) => state.search.ids);
  const allMovies = useSelector((state) => moviesSelectors.selectAll(state));
  const filteredMovies = useSelector((state) => selectManyByIds(state, searchIds));

  const movies = searchIds && searchIds.length > 0 ? filteredMovies : allMovies;

  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  return { movies, status, error };
}
