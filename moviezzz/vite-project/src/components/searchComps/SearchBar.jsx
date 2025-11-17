import { useState } from "react";

import { Stack, TextField } from "@mui/material";

import SearchBtn from "./SearchBtn";
import ResetSearchBtn from "./ResetSearchBtn";

export default function SearchBar({
  placeholder,
  onSearch,
  liveSearch = false,
}) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !liveSearch) {
      onSearch(value);
      setValue("");
    }
  };

  const handleClick = () => {
    if (!liveSearch) {
      onSearch(value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (liveSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      onKeyDown={handleKeyDown}
      sx={{ width: "70%" }}
    >
      <ResetSearchBtn isActive={value} onChange={setValue} />

      <TextField
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="small"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#4a3f3fe7",
            borderRadius: "4px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#7b393990",
            },
            "&.Mui-focused": {
              backgroundColor: "#984b4ba9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#281e1eff",
            },
          },
        }}
      />

      {!liveSearch && (
        <SearchBtn onClick={handleClick}/>
      )}
    </Stack>
  );
}
