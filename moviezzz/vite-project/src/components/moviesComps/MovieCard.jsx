import { Link } from "react-router";
import { useSelector } from "react-redux";

import {
  selectUserStatus,
  selectMoviesIdsFromUser,
} from "../../redux/slices/user";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import AddToFavBtn from "./AddToFavBtn";

export default function MovieCard({ movieId, title, poster_path, year }) {
  const userStatus = useSelector(selectUserStatus);
  const moviesIds = useSelector(selectMoviesIdsFromUser);

  const isFavorite = moviesIds.includes(Number(movieId));
  console.log(moviesIds, isFavorite, movieId);

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
              /* Scrollbar Styling */
              "&::-webkit-scrollbar": {
                width: "6px", // עובי אנכי
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent", // רקע המסילה
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffffff40", // צבע ה-thumb
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#ffffff80", // צבע ב-hover
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
                <AddToFavBtn initialFilled={isFavorite} />
              ) : (
                ""
              )}

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
