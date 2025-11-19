import { useState } from "react";
import { useDispatch } from "react-redux";

import { Stack } from "@mui/material";

import { setLastSearch } from "../../redux/slices/search";
import FiltersDrawer from "./FiltersDrawer";
import SearchMovies from "../../sections/SearchMovies";

export default function Filters() {
  const dispatch = useDispatch();

  const [titleFilter, setTitleFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  function handleFilters(title, year, genre) {
    const searchFilters = { name: title, year: year, genre: genre };
    
    dispatch(setLastSearch(searchFilters));

    setTitleFilter(title);
    setYearFilter(year);
    setGenreFilter(genre);
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        flex: 1,
        maxWidth: { xs: 200, sm: 300, md: 400 },
        mx: { xs: 1, md: 3 },
      }}
    >
      <FiltersDrawer
        onClickApply={() => handleFilters(titleFilter, yearFilter, genreFilter)}
        onClickReset={""}
      />
      <SearchMovies />
    </Stack>
  );
}
