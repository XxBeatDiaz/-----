import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";

import { getMoviesIdsFromUser, getUser } from "../redux/slices/login";
import { selectManyByIds } from "../redux/slices/movies";

import ListMovieCards from "../components/moviesComps/ListMovieCards.jsx";
import LoginDialog from "../components/userComps/LoginDialog.jsx";

export default function MyFavorites() {
  const user = useSelector(getUser);
  const moviesIds = useSelector(getMoviesIdsFromUser);
  const moviesByIds = useSelector((state) => selectManyByIds(state, moviesIds));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        px: "50px",
        backgroundColor: "#313b3fff",
      }}
    >
      <ListMovieCards movies={moviesByIds} />
      <Box>
        {!!user || (
          <>
            <Typography>Please login</Typography>
            <LoginDialog />
          </>
        )}
      </Box>
    </Box>
  );
}
