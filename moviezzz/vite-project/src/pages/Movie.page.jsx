import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { VideoPlayer } from "../components/VideoPlayer";
import { moviesSelectors } from "../redux/slices/movies";

export default function MoviePage() {
  const { id } = useParams();
  const movie = useSelector((state) => moviesSelectors.selectById(state, id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Movie {movie.title} <br></br> {movie.summary}
      <img src={movie.poster_path} alt={movie.title} />
      <VideoPlayer
        src={"/matrixTrailer.mp4"}
        isPlaying={movie?.title ? true : false}
        thumb={movie.poster_path}
      />
    </div>
  );
}
