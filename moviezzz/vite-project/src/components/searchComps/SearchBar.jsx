import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";


export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function handleKeyDown(ClickedKey) {
    if (ClickedKey.key === "Enter") {
      onSearch(value);
      setValue("");
    }
  }

  function handleSearch() {
    onSearch(value);
    setValue("");
  }

  return (
    <Stack direction="row" spacing={1} onKeyDown={handleKeyDown}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search any movies..."
        size="small"
        fullWidth
      />
      <Button
        sx={{ backgroundColor: "gray" }}
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
}
