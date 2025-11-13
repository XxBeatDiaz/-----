import { Box } from "@mui/material";
import TopNav from "./TopNav";

import LoginDialog from "../components/userComps/LoginDialog";
import { logo, links } from "../globals";


export default function Layout({ children }) {
  const avatar = null;//לממש בהמשך
  
  return (
    <>
      <TopNav logo={logo} links={links} avatar={avatar} loginDialog={<LoginDialog />} />

      {/* <div style={{ backgroundColor: "#292929", height: "100px" }}></div> */}
      <Box sx={{ backgroundColor: "#222222ff" }}>{children}</Box>
    </>
  );
}
