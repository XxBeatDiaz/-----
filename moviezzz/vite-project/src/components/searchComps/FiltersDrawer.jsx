import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Drawer,
  Button,
  Box,
  Typography,
  Divider,
  Badge,
  TextField,
  MenuItem,
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import CircleIcon from "@mui/icons-material/Circle";

import { getLastSearch } from "../../redux/slices/search";

export default function FiltersDrawer({
  onClickApply,
  onClickReset,
  currentYear,
}) {
  const [open, setOpen] = useState(false);
  const [applyMark, setApplyMark] = useState(false);

  const { year, genre } = useSelector(getLastSearch);
  console.log(year, genre);

  const [selectedYear, setSelectedYear] = useState(year || "");
  const [selectedGenre, setSelectedGenre] = useState(genre || "");

  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, year) => 1900 + year
  ).reverse();

  function handleOpenDrawer() {
    setOpen(true);
  }

  function handleCloseDrawer() {
    setOpen(false);
  }

  function handleApplyFilters() {
    handleCloseDrawer();
    setApplyMark(true);
    onClickApply(selectedYear, selectedGenre);
  }

  function handleResetFilters() {
    handleCloseDrawer();
    setApplyMark(false);

    setSelectedYear("");
    setSelectedGenre("");

    onClickReset();
  }

  function handleFilterYear(e) {
    setSelectedYear(e.target.value);
  }

  function handleFilterGenre(e) {
    setSelectedGenre(e.target.value);
  }

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        badgeContent={
          applyMark ? (
            <CircleIcon sx={{ fontSize: 7, color: "#773535f0" }} />
          ) : undefined
        }
      >
        <FilterListIcon
          onClick={handleOpenDrawer}
          sx={{
            cursor: "pointer",
            color: "#797575ff",
            transition: "color 0.17s",
            "&:hover": { color: "#e03838cc" },
          }}
        />
      </Badge>

      <Drawer
        anchor="top"
        open={open}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            height: "300px",
            width: "500px",
            mx: "auto",
            borderRadius: "0 0 12px 12px",
            overflow: "hidden",
            backgroundColor: "#ffffffff",
            boxShadow: "0 10px 700px rgba(130, 16, 16, 0.32)",
          },
        }}
      >
        <Box
          width={470}
          p={2}
          role="presentation"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography variant="h6">Filters</Typography>

          <Divider />

          <TextField label={"genre: "} value={selectedGenre} select onChange={handleFilterGenre}>
            <MenuItem>Action</MenuItem>
            <MenuItem>Fantasy</MenuItem>
          </TextField>

          <TextField
            label="Year"
            value={selectedYear}
            select
            onChange={handleFilterYear}
          >
            {years.map((y) => (
              <MenuItem key={y} value={year ? year : y}>
                {y}
              </MenuItem>
            ))}
          </TextField>

          <Divider />

          <Box>
            <Button variant="text" color="success" onClick={handleApplyFilters}>
              Apply
            </Button>

            {applyMark ? (
              <Button variant="text" color="error" onClick={handleResetFilters}>
                Reset
              </Button>
            ) : undefined}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
