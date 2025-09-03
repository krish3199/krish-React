import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1)
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${page}`
    )
      .then((req) => req.json())
      .then((res) => {
        if(page == 1){

          setMovies(res.results); 
        }
        else{

          setMovies(oldData=>[...oldData,...res.results])
        }
      });
  }, [page]);

  let newdata = ()=>{
    setPage(page + 1)
  }

  return (
    <div className="container">
      <h1 className="title">🎬 Trending Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
      <button onClick={newdata}>viwe more</button>
    </div>
    
  );
};

export default App;
