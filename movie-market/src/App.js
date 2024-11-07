import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Home from "./components/Home";
import Admin from "./components/Admin";
import MovieDetails from "./components/movieDetails";
import Payment from "./components/payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
