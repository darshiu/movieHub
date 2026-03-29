import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Box
} from "@mui/material";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "#1f1f1f",
              borderRadius: "12px",
              p: 1,
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search movies or TV series..."
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{
                input: { color: "#fff" },

                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent",
                },

                "& .MuiFilledInput-root:hover": {
                  backgroundColor: "transparent",
                },

                "& .MuiFilledInput-root.Mui-focused": {
                  backgroundColor: "transparent",
                },
              }}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <Button
              onClick={fetchSearch}
              variant="contained"
              sx={{
                minWidth: "50px",
                height: "50px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #ff6b6b, #ff3d00)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff3d00, #ff6b6b)",
                },
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </div>
       <Tabs
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          centered
          sx={{
            mb: 2,

            "& .MuiTabs-indicator": {
              height: "4px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #ff6b6b, #fbc531, #00a8ff)",
            },
          }}
        >
          <Tab
            label="Search Movies"
            sx={{
              width: "50%",
              fontWeight: "bold",
              color: "#aaa",
              transition: "0.3s",

              "&.Mui-selected": {
                color: "#fff",
              },

              "&:hover": {
                color: "#ff6b6b",
              },
            }}
          />
          <Tab
            label="Search TV Series"
            sx={{
              width: "50%",
              fontWeight: "bold",
              color: "#aaa",
              transition: "0.3s",

              "&.Mui-selected": {
                color: "#fff",
              },

              "&:hover": {
                color: "#00a8ff",
              },
            }}
          />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent info={c} key={c.id} id={c.id} media_type={type ? "tv" : "movie"} />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
