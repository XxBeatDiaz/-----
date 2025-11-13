import { Link as RouterLink } from "react-router";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Avatar,
  Link,
  Typography,
} from "@mui/material";

import SearchMovies from "./SearchMovies.jsx";
import ResetSearchBtn from "../components/searchComps/ResetSearchBtn.jsx";

export default function TopNav({ logo, links, avatar, loginDialog }) {

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={2}
      sx={{
        backgroundColor: "#302e2eff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          px: { xs: 2, md: 4 },

        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 65,
              height: 55,
              objectFit: "contain",
              mr: 1,
              borderRadius: 8,
            }}
          />
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ display: { xs: "none", sm: "block" }, color: "#9e9393ec", fontWeight: 600 }}
          >
            Moviez
            <Box component="span" sx={{ color: "#cb0202e9" }}>
              ZZ
            </Box>
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              component={RouterLink}
              to={link.url}
              underline="none"
              color="#bcbcbcff" 
              sx={{
                fontFamily: "sans-serif" ,
                fontWeight: 500,
                transition: "color 0.17s",
                "&:hover": { color: "#e03838cc"  },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

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
          <SearchMovies />
          <ResetSearchBtn />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Avatar src={avatar} />
          {loginDialog}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
