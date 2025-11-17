import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography, Divider } from "@mui/material";

import { getMoviesIdsFromUser, getUser } from "../redux/slices/user.js";
import { selectManyByIds } from "../redux/slices/movies";

import { fetchManyMovies } from "../redux/thunks/moviesThunks.js";

import ListMovieCards from "../components/moviesComps/ListMovieCards.jsx";
import LoginDialog from "../components/userComps/LoginDialog.jsx";
import SearchBar from "../components/searchComps/SearchBar.jsx";

import { filterItems } from "../api/utils.js";

export default function MyFavorites() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const {status} = useSelector(state => state.user);
  const moviesIds = useSelector(getMoviesIdsFromUser);
  const moviesByIds = useSelector((state) => selectManyByIds(state, moviesIds));

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(fetchManyMovies(moviesIds));
    }
  },[dispatch, moviesIds, status])

  const [filteredMovies, setFilteredMovies] = useState(moviesByIds);

  function handleSearch(query) {
    const newFilteredMovies = filterItems(moviesByIds, query);
    setFilteredMovies(newFilteredMovies);
  }

  useEffect(() => {
    setFilteredMovies(moviesByIds);
  }, [moviesByIds]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        px: "50px",
        backgroundColor: "#313b3fff",
      }}
    >
      <Divider
        textAlign="middle"
        sx={{ margin: "20px 0", fontFamily: "sans-serif", fontWeight: "bold",color: "#d620208e" }}
      >
        Your movies
      </Divider>

      <Box mb={3} justifyItems={"center"}>
        <SearchBar
          placeholder={"Search any favorite movie..."}
          onSearch={handleSearch}
          liveSearch={true}
        />
      </Box>

      <ListMovieCards movies={filteredMovies} />
      
      <Box>
        {!!user || (
          <>
            <Typography>To see your favorites, please login : </Typography>
            <LoginDialog />
          </>
        )}
      </Box>
    </Box>
  );
}
