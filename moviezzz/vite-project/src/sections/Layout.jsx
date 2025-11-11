import { Box } from "@mui/material";
import TopNav from "./TopNav";
import LoginDialog from "../components/LoginDialog";

const logo = "/Logo4.png";

const links = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Movies", url: "/movies" },
  { id: 3, label: "My favorite movies", url: "/myFavorites" },
];

export default function Layout({ children }) {
  const avatar = null;//לממש בהמשך
  
  return (
    <>
      <TopNav logo={logo} links={links} avatar={avatar} loginDialog={<LoginDialog />} />

      <div style={{ backgroundColor: "rgb(50, 49, 49)", height: "100px" }}></div>
      <Box sx={{ backgroundColor: "rgb(50, 49, 49);" }}>{children}</Box>
    </>
  );
}
