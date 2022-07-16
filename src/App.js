import React, { Component }  from 'react';
import "./App.css";
import Header from "./Components/Header";
import {ListingScreen} from "./Components/ListingScreen";
import {AddSong} from "./Components/AddSong";
import {AddArtist} from "./Components/AddArtist";
import {Footer} from "./Components/Footer";


function App() {
  let songs = [
    {
      sno:1,
      artwork:"cover image",
      song:"Someone you loved",
      date_of_release:"date",
      artists:"Lewis Capaldi",
      rating:"stars"
    },
    {
      sno:2,
      artwork:"cover image",
      song:"Circles",
      date_of_release:"date",
      artists:"Post Malone",
      rating:"stars"
    },
    {
      sno:3,
      artwork:"cover image",
      song:"Intentions",
      date_of_release:"date",
      artists:"Justin Bieber, Quavo",
      rating:"stars"
    }
  ];

  return (
    <>
      <Header title="Spotify!" searchBar={false}/>
      <ListingScreen songs={songs}/>
      <AddSong/>
      <AddArtist/>
      <Footer/>
    </>
  );
}

export default App;
