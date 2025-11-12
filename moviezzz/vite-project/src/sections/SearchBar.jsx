import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { fetchMoviesByFilters } from "../redux/thunks/moviesThunk.js";

import { Stack, TextField, Button } from "@mui/material";

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSearch = () => {
    if (title.trim() === "") return;
    dispatch(fetchMoviesByFilters({ name: title, year: "", genres: "" }));
    navigate(`/movies`);
    setTitle("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack direction="row" spacing={1} onKeyDown={handleKeyDown}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
