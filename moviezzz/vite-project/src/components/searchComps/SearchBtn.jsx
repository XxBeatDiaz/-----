import SearchIcon from '@mui/icons-material/Search';

export default function SearchBtn({onClick}) {
  return (
    <SearchIcon
      variant="outlined"
      onClick={onClick}
      sx={{
        alignSelf: "center",
        cursor: "pointer",
      }}
    >
      Search
    </SearchIcon>
  );
}
