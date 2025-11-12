import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography, Grid, Divider } from "@mui/material";

import { moviesSelectors } from "../redux/slices/movies";
import { fetchOneMovie } from "../redux/thunks/moviesThunk.js"

import { VideoPlayer } from "../components/VideoPlayer";

export default function MoviePage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  // const  
  
  const movie = useSelector((state) => moviesSelectors.selectById(state, id));

  return (
    <Box
      sx={{
        bgcolor: "#131212ff",
        color: "#b1aeaeff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          mt: 3,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)",
          marginBottom: "20px",
        }}
      >
        <br />
        {movie ? (
          <VideoPlayer
            src="/matrixTrailer.mp4"
            isPlaying={true}
            thumb={movie?.poster_path}
          />
        ) : (
          <Typography sx={{ color: "white", textAlign: "center", mt: 5 }}>
            Loading...
          </Typography>
        )}

        <Divider
          sx={{ my: 4, width: "80%", bgcolor: "rgba(129, 128, 128, 0.25)" }}
        />

        <Box
          sx={{
            display: "flex",
            bgcolor: "#313131ff",
            borderRadius: 3,
            p: 2,
            gap: 4,
            marginBottom: "20px",
            width: "90%",
            maxWidth: "1100px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={movie.poster_path}
            alt="/matrix"
            style={{ borderRadius: "20px", maxHeight: "350px", maxWidth: "300px" }}
          />
          <h1 style={{ margin: "0px", borderBottom: "1px solid gray" }}>{movie.title}</h1>
          <Typography sx={{}}>
            {movie.synopsis}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
