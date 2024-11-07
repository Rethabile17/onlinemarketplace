import React from "react";
import "./MovieDetails.css";
import { useNavigate, useLocation } from "react-router-dom";

function MovieDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const movie = location.state?.movie;
    
    
    const handlePaymentNav = () => {
      navigate("/payment", {
        state: {
          movieName: movie?.movieName,
          totalPrice: movie?.price,
        },
      });
    };
  
    return (
      <div className="movieDetails">
        <div className="movieDetails-page">
          <div className="movieDetails-top">
            <div className="first-img">
              <img src={movie?.image} alt={movie?.movieName} />
            </div>
          </div>
  
          <div className="movieDetails-down">
            <p className="movie-name">{movie?.movieName}</p>
            <h4>Director</h4>
            <p className="description-detail">{movie?.description}</p>
            <h4>Genre</h4>
            <p>{movie?.genre}</p>
            <p>Total Price: R{movie?.price}</p>
  
            <div>
              <button className="movieDetails-button" onClick={handlePaymentNav}>Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default MovieDetails;
