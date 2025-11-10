import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { fetchMoviesByFilters } from "../redux/thunks/moviesThunk.js";
import { Stack, TextField, Button } from "@mui/material";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === "") return;
    dispatch(fetchMoviesByFilters({ name: query, year: "", genres: "" }));
    navigate(`/movies`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack direction="row" spacing={1} onKeyDown={handleKeyDown}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        size="small"
        fullWidth
      />
      <Button
        sx={{ backgroundColor: "gray" }}
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
}
