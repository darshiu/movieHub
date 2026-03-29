import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";
// import Container from '@mui/material/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/moviehub/" element={<Trending />} />
            <Route path="/moviehub/movies" element={<Movies />} />
            <Route path="/moviehub/series" element={<Series />} />
            <Route path="/moviehub/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

