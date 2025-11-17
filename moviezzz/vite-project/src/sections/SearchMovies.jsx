import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import SearchBar from "../components/searchComps/SearchBar.jsx";
import { fetchMoviesByFilters } from "../redux/thunks/moviesThunks.js";


export default function SearchMovies() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSearch(title) {
    if (title.trim() === "") return;
    dispatch(fetchMoviesByFilters({ name: title }));
    navigate(`/movies`);
  }

  return <SearchBar placeholder={"Search any movies..."} onSearch={handleSearch} />;
}
