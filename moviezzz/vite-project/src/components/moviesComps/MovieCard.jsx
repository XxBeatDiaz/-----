import { Link } from "react-router";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";


export default function MovieCard({ id, title, poster_path }) {
  return (
    <Link to={`/movie/${id}`}>
      <Box sx={{ width: 190 }}>
        <Card
          sx={{
            backgroundColor: "#534b5fff",
            color: "white",
            textAlign: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#313b3fff",
              transform: "rotate(-0.4deg) scale(1.02)",
            },
            transition: "all 0.2s ease-in-out",
            height: 350,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="270"
            image={poster_path}
            alt={title}
          />
          <CardContent
            sx={{
              flexGrow: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h7" fontWeight="bold">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
