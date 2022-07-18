import React from "react";
// import {TopSongs} from "./TopSongs";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Header from "./Header";
import { Link } from 'react-router-dom';

export const ListingScreen = (props) => {
  let songs = [
    {
      sno: 1,
      artwork: "cover image",
      song: "Someone you loved",
      date_of_release: "date",
      artists: "Lewis Capaldi",
      rating: "stars",
    },
    {
      sno: 2,
      artwork: "cover image",
      song: "Circles",
      date_of_release: "date",
      artists: "Post Malone",
      rating: "stars",
    },
    {
      sno: 3,
      artwork: "cover image",
      song: "Intentions",
      date_of_release: "date",
      artists: "Justin Bieber, Quavo",
      rating: "stars",
    },
  ];
  return (
    <>
      <Header title="Spotify!"></Header>
      <div className="container">
        <h3>Top 10 Songs</h3>
        <Button variant="primary" type="submit" >
        <Link to="/add-song">Add Song</Link>
      </Button>
        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
          {songs.map((song) => {
            return <tr>
            <td>{song.sno}</td>
            <td>{song.song}</td>
            <td>{song.artists}</td>
            <td>{song.rating}</td>
          </tr>;
          })}
          </tbody>
        </Table>
      </div>
      <div className="container">
        <h3>Top 10 Artists</h3>
        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th>Arist</th>
              <th>Date of Birth</th>
              <th>SOngs</th>
            </tr>
          </thead>
          <tbody>
          {songs.map((song) => {
            return <tr>
            <td>{song.song}</td>
            <td>{song.artists}</td>
            <td>{song.rating}</td>
          </tr>;
          })}
          </tbody>
        </Table>
     </div>
    </>
  );
};
