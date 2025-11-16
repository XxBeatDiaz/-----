import { useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import { removeAll } from "../../redux/slices/search.js";

export default function ResetFiltersBtn({ isActive, onClick }) {
  const dispatch = useDispatch();

  function handleResetFilter() {
    dispatch(removeAll());
  }

  return (
    <CloseIcon
      onClick={isActive ? handleResetFilter : undefined}
      sx={{
        alignSelf: "center",
        cursor: isActive ? "pointer" : "",
        color: isActive ? "#842e2ecb" : "#363434e4",
      }}
    />
  );
}
