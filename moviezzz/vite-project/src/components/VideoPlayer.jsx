export function VideoPlayer({ src, isPlaying, thumb }) {
  return isPlaying ? (
    <video src={src} poster={thumb} playsInline autoPlay muted controls />
  ) : (
    <div>Loading video...</div>
  );
}
