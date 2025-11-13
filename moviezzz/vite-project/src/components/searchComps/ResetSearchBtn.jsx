import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeAll } from "../../redux/slices/search.js";


export default function ResetSearchBtn() {
  const dispatch = useDispatch();

  function handleResetFilter() {
    dispatch(removeAll());
  }

  return (
    <Button
      sx={{
        display: "flex",
        backgroundColor: "white",
        justifySelf: "center",
        alignSelf: "center",
      }}
      onClick={() => {
        handleResetFilter();
      }}
    >
      Cancel filters
    </Button>
  );
}
