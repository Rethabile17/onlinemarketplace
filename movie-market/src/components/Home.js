import React, { useEffect, useState } from "react";
import Single from "../assests/2n6i1fH-the-dark-knight-rises-wallpapers (1).png";
import "./Home.css";
import axios from "axios";
import Nav from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://backendmarket-h7xu.onrender.com/api/getMovies/");
      setMovies(response.data.data); // Access `data` property inside `response.data`
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message); // Display error message
        console.error("Error fetching movies:", error.response.data.message);
      } else {
        setErrorMessage("An error occurred while fetching movies");
        console.error("Error fetching movies:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleMovieNav = (movie) => {
    Navigate("/movieDetails", {
      state: { movie }, // Pass only the clicked movie
    });
  };

  return (
    <div className="movie-container">
      <Nav />
      <Hero />
      <div className="small-container">
        {movies.map((movie, index) => (
          <div
            className="movie-page"
            key={index}
            onClick={() => handleMovieNav(movie)}
          >
            <div className="movie-head">
              <div className="movie-down">
                <img
                  className="movie-top"
                  src={movie.image || Single}
                  alt={movie.movieName}
                />
                <p className="movie-price">{movie.movieName}</p>
                <p className="movie-price">{movie.director}</p>
                <p className="movie-price">{movie.genre}</p>
                <p className="movie-price">R{movie.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
