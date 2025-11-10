import { Box } from "@mui/material";
import TopNav from "./TopNav";

const logo = "/Logo4.png";

const links = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Movies", url: "/movies" },
  { id: 3, label: "My favorite movies", url: "/myFavorites" },
];

const loginLink = { label: "Login", url: "/login" };

export default function Layout({ children }) {
  return (
    <>
      <TopNav logo={logo} links={links} LoginLink={loginLink} />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "rgb(50, 49, 49)", height: "60px" }}></div>
      <Box sx={{ backgroundColor: "rgb(50, 49, 49);" }}>{children}</Box>
    </>
  );
}
