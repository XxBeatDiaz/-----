import { Link } from "react-router";
import { Avatar } from "@mui/material";
import SearchBar from "./SearchBar";
import "./TopNav.css";

export default function TopNav({ logo, links, avatar, loginDialog }) {

  return (
    <div className="top-nav">
      <img src={logo} alt="Logo" width="70" height="60" />
      <div className="links">
        {links.map((link) => (
          <Link className="link" key={link.id} to={link.url}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="user-section">
        <Avatar src={avatar} sx={{ alignSelf: "center" }} />
          {loginDialog}
      </div>
    </div>
  );
}
