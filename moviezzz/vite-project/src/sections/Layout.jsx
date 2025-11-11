import { Box } from "@mui/material";
import TopNav from "./TopNav";
import LoginDialog from "../components/LoginDialog";
import { logo, links } from "../globals";

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
