// import React, { useState, useEffect } from "react";
// import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import MovieIcon from "@mui/icons-material/Movie";
// import TvIcon from "@mui/icons-material/Tv";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";

// const SimpleBottomNavigation = () => {
//   const [value, setValue] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (value === 0) navigate("/");
//     else if (value === 1) navigate("/movies");
//     else if (value === 2) navigate("/series");
//     else if (value === 3) navigate("/search");
//   }, [value, navigate]);

//   return (
//     <div className="navBox">
      
//     </div>
//     // <Box
//     //   sx={{
//     //     width: "100%",
//     //     position: "fixed",
//     //     bottom: 0,
//     //     bgcolor: "#ddd",
//     //     zIndex: 100,
//     //   }}
//     // >
//     //   <BottomNavigation
//     //     sx={{ background: "#282c34" }}
//     //     value={value}
//     //     onChange={(event, newValue) => setValue(newValue)}
//     //     showLabels
//     //   >
//     //     <BottomNavigationAction
//     //       label="Trending"
//     //       icon={<WhatshotIcon />}
//     //       sx={{ color: "white" }}
//     //     />
//     //     <BottomNavigationAction
//     //       label="Movies"
//     //       icon={<MovieIcon />}
//     //       sx={{ color: "white" }}
//     //     />
//     //     <BottomNavigationAction
//     //       label="TV Series"
//     //       icon={<TvIcon />}
//     //       sx={{ color: "white" }}
//     //     />
//     //     <BottomNavigationAction
//     //       label="Search"
//     //       icon={<SearchIcon />}
//     //       sx={{ color: "white" }}
//     //     />
//     //   </BottomNavigation>
//     // </Box>
//   );
// }
// export default SimpleBottomNavigation;
import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const SimpleBottomNavigation = ()=> {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/", "/movies", "/series", "/search"];

  const currentTab = routes.indexOf(location.pathname);

  const handleChange = (event, newValue) => {
    navigate(routes[newValue]);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#121212" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
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
export default SimpleBottomNavigation;