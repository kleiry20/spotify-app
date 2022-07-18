// import React, { Component }  from 'react';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import {ListingScreen} from "./Components/ListingScreen";
import {AddSong} from "./Components/AddSong";
import {AddArtist} from "./Components/AddArtist";
import {Footer} from "./Components/Footer";


// function App() {
//   

//   return (
//     <>
//       <Header title="Spotify!" searchBar={false}/>
//       <Register />
//       <ListingScreen songs={songs}/>
//       <AddSong/>
//       <AddArtist/>
//       <Footer/>
//     </>
//   );
// }

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/listing-screen" element={<ListingScreen />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/artist" element={<AddArtist />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;