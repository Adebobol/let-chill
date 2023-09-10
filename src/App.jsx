import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import IntroPage from "./Pages/IntroPageComponent/IntroPage";
import { useEffect } from "react";
import { useState } from "react";
import Detail from "./Components/DetailComponent/Detail";

const KEY = "89908202";
export default function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong while fetching!!");

          const data = await res.json();
          setSearchResult(data.Search);
          console.log(data);
          setError("");
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (search.length < 3) {
        setError("");
        setSearchResult([]);
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [search]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <IntroPage
              setSearch={setSearch}
              search={search}
              searchResult={searchResult}
            />
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="/:detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
