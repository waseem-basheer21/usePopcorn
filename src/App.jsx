import { useState } from "react";
import { tempWatchedData } from "./data";

import { tempMovieData } from "./data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(tempMovieData);
  // eslint-disable-next-line no-unused-vars
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <>
            <Summary watched={watched} />
            <WatchedList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}
