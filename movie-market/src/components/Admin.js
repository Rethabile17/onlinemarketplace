import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [viewMode, setViewMode] = useState("addRoom");
  const [image, setImage] = useState("");
  const [movieName, setMovieName] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleView = () => {
    setViewMode(viewMode === "addMovie" ? "viewMovies" : "addMovie");
  };

  const handleAddMovie = async () => {
    try {
      const response = await axios.post('https://backendmarket-h7xu.onrender.com/addMovie', {
        movieName,
      director,
      price,
      genre,
      description,
      image
      });
      console.log('Sign Up Successful:', response.data);
     
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
        console.error('Sign Up Error:', error.response.data);
      } else {
        setErrorMessage("An error occurred during sign up");
        console.error('Sign Up Error:', error.message);
      }
    }
  };




  return (
    <div className="admin">
      <div className="admin-page">
        <h1 className="admin-head">Movies Admin Dashboard</h1>
        <button className="toggle-view-button" onClick={toggleView}>
          {viewMode === "addMovie" ? "View Movies" : "Add movie"}
        </button>
        <button className="logout-button">Logout</button>

        {viewMode === "addMovie" ? (
          <div className="admin-input">
            <input
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <input
              placeholder="Movie-Name"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />

            <input
              placeholder="Director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="genre"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />

            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button className="admin-button" onClick={handleAddMovie}>Add Movie</button>
          </div>
        ) : (
          <div className="movies-list">
            <h2>Movies</h2>
            {movies.length === 0 ? (
              <p>No movies available.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>movieName</th>
                    <th>Director</th>
                    <th>Description</th>
                    <th>Genre</th>
                    <th>price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {bookings.map((room, index) => (
                    <tr key={index}>
                      <td>{room.roomType}</td>
                      <td>{room.roomNumber}</td>
                      <td>{room.price}</td>
                      <td>{room.description}</td>
                      <td>{room.guests}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
