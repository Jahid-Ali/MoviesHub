import { React, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';
import { FaVideo } from "react-icons/fa";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [query, setquery] = useState("");

  const [isLoading, SetIsLoading] = useState(true);

  const YOUR_APP_ID = process.env.REACT_APP_Application_ID

  const url = `http://www.omdbapi.com/?apikey=${YOUR_APP_ID}&s=${query}`;

  const getMovies = async () => {
    try {
      const result = await axios.get(url);

      // console.log("All_DATA", result.data);

      if (result.data.Response === "True") {
        setMovies(result.data.Search);

        SetIsLoading(false)
        // console.log("REAL_DATA", result.data.Search);
      }

    } catch (error) {
      console.log("ERROR DURING AXIOS.GET", error);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await getMovies();
      //! after submit clear input box
      setquery("");
    } catch (error) {
      console.log("ERROR DURING ON SUBMIT", error);
    }
  };

  return (
    <div className="app">
      <h1>Movies Hub <FaVideo /> </h1>
      <form className="form" onSubmit={(e) => { onSubmit(e) }}>
        <input
          className="input"
          type="text"
          placeholder="Enter Movies Name"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="submit" type="submit">Submit</button>
      </form>



      {isLoading
        ?
        <div className="container">
          <span className="text1">SEARCH</span>
          <span className="text2">...Loading...</span>
        </div>
        :
        <div className="movies">
          {
            movies.map((item) => {
              return <MovieCard items={item} key={item.imdbID} />
            })}
        </div>}

    </div>
  );
}

export default App;
