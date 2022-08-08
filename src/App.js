// import React, { Component }  from 'react';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register";
import { ListingScreen } from "./Components/ListingScreen";
import { AddSong } from "./Components/AddSong";

require("dotenv").config();

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<ListingScreen />} />
        <Route path="/add-song" element={<AddSong />} />
        {/* <Route path="/artist" element={<AddArtist />} /> */}
      </Routes>
    </Suspense>
  </Router>
);

export default App;
