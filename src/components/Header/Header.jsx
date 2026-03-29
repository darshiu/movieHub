import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ()=> {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/movieHub/", "/movieHub/movies", "/movieHub/series", "/movieHub/search"];

  const currentTab = routes.indexOf(location.pathname);

  const handleChange = (event, newValue) => {
    navigate(routes[newValue]);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#121212" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography variant="h6" 
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "2.5rem",
            background: "linear-gradient(45deg, #ff6b6b, #fbc531, #00a8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        onClick={() => navigate("/")}>
          🎬 MovieHub
        </Typography>

        {/* Navigation Tabs */}
        <Tabs
          value={currentTab === -1 ? 0 : currentTab}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab icon={<WhatshotIcon />} label="Trending" />
          <Tab icon={<MovieIcon />} label="Movies" />
          <Tab icon={<TvIcon />} label="TV Series" />
          <Tab icon={<SearchIcon />} label="Search" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
export default Header;