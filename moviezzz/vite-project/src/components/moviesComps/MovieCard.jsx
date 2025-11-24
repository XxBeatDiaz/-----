import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import AddToFavBtn from "./AddToFavBtn";

import { showAlert } from "../../redux/slices/alert";

import {
  selectUserStatus,
  selectMoviesIdsFromUser,
} from "../../redux/slices/user";

export default function MovieCard({ movieId, title, poster_path, year }) {
  const dispatch = useDispatch();

  const userStatus = useSelector(selectUserStatus);
  const moviesIds = useSelector(selectMoviesIdsFromUser);

  const isFavorite = moviesIds.includes(Number(movieId));

  function handleAddFavorite() {
    // dispatch();
    dispatch(
      showAlert({ type: "success", message: "Movie added successfully" })
    );
  }

  function handleRemoveFavorite() {
    // dispatch();
    dispatch(
      showAlert({ type: "success", message: "Movie removed successfully" })
    );
  }

  return (
    <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }}>
      <Box sx={{ width: 190 }}>
        <Card
          sx={{
            backgroundColor: "#743434ff",
            color: "white",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#ff000092",
              transform: "rotate(-0.1deg) scale(1.008)",
            },
            transition: "all 0.2s ease-in-out",
            height: 370,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ minHeight: 270, maxHeight: 270 }}
            component="img"
            image={poster_path}
            alt={title}
          />

          <CardContent
            sx={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffacac3d",
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#ffffff80",
              },

              overflowY: "auto",
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Typography fontFamily="sans-serif" variant="h7" fontWeight="bold">
              {title}
            </Typography>

            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              {userStatus === "succeeded" ? (
                <AddToFavBtn
                  initialFilled={isFavorite}
                  onAddClick={handleAddFavorite}
                  onRemoveClick={handleRemoveFavorite}
                />
              ) : null}

              <Typography
                sx={{
                  width: "20%",
                  fontFamily: "sans-serif",
                  color: "#c9c9c9ea",
                }}
              >
                {year}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
