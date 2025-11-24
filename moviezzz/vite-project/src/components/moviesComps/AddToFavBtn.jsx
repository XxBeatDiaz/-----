import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AddToFavBtn({
  onAddClick,
  onRemoveClick,
  initialFilled,
}) {
  const [filled, setFilled] = useState(initialFilled);

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  function handleAdd(event) {
    handleClick(event);
    setFilled(true);
    onAddClick();
  }

  function handleRemove(event) {
    handleClick(event);
    setFilled(false);
    onRemoveClick();
  }

  return (
    <>
      <span
        style={{
          color: filled ? "#f1e9e9ff" : "#c1b9b9f0",

          transform: filled ? "scale(1.01)" : "scale(1)",
          transition: "transform 1.4s ease, color 0.8s ease",
        }}
      >
        {filled ? (
          <FavoriteIcon
            onClick={handleRemove}
            sx={{
              fontSize: 20,
              fill: "currentColor",
            }}
          />
        ) : (
          <FavoriteBorderIcon onClick={handleAdd} sx={{ fontSize: 20 }} />
        )}
      </span>
    </>
  );
}
