import React, {useState, useEffect} from "react";
// import {TopSongs} from "./TopSongs";
import Image from 'react-bootstrap/Image'
import Table from "react-bootstrap/Table";
import Header from "./Header";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Rating } from 'react-simple-star-rating'

export const ListingScreen = (props) => {

  const user_id = localStorage.getItem('user_id');
  const [songs, setSongs] = useState([])
  const [artists, setArtists] = useState([])

  const [rating, setRating] = useState({})

  const handleRating = (rate, song) => {

    if (rate == 20) rating.rating = 1 
    else if (rate == 40) rating.rating = 2
    else if (rate == 60) rating.rating = 3
    else if (rate == 80) rating.rating = 4
    else if (rate == 100) rating.rating = 5

    rating.app_user = user_id
    rating.song = song.id
    axios.post(
      process.env.REACT_APP_API_URL + 'ratings/create/', rating)
    .then(res => {
      alert('success');
    })
    // other logic
  }

  const updateRating = (rate, song, rating) => {

    if (rate == 20) rating.rating = 1 
    else if (rate == 40) rating.rating = 2
    else if (rate == 60) rating.rating = 3
    else if (rate == 80) rating.rating = 4
    else if (rate == 100) rating.rating = 5

    console.log(rating, "rating")

    axios.put(
      process.env.REACT_APP_API_URL + 'ratings/update/'+rating.id+'/', rating)
    .then(res => {
      alert('success');
    })
    // other logic
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + 'songs/list/')
    .then(response => {
      console.log(response.data);
      setSongs(response.data);
    })
  }, []);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + 'artists/list/')
    .then(response => {
      console.log(response.data);
      setArtists(response.data);
    })
  }, []);

  // function RenderRating(props) {
  //   const song = props.song
  // }

  function RenderRating({ song }) {

    const [rating, setRating] = useState('')

    useEffect(() => {
      function getRating(id) {
        axios.get('http://127.0.0.1:8000/ratings/fetch/'+user_id+'/'+id+'/')
        .then(response => {
          if (response.data.rating == 1) response.data.rating = 20 
          else if (response.data.rating == 2) response.data.rating = 40
          else if (response.data.rating == 3) response.data.rating = 60
          else if (response.data.rating == 4) response.data.rating = 80
          else if (response.data.rating == 5) response.data.rating = 100
          setRating(<Rating onClick={ (e) => updateRating(e, song, response.data) } ratingValue={response.data.rating} /* Available Props */ />); 
        }).catch((error) => {
          setRating(<Rating onClick={(e) => handleRating(e, song)} ratingValue={0} /* Available Props */ />); 
        })
      }
  
      getRating(song.id);
    },[]);
  
    return rating;
  }

  

  return (
    <>
      <Header title="Spotify!"></Header>
      <div className="container">
        <h3>Top 10 Songs</h3>
        <Link to="/add-song">Add Song</Link>
        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th>Artwork</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Average Rating</th>
              <th>Your Rating</th>
            </tr>
          </thead>
          <tbody>
          {songs.map((song, index) => {
            let avg_rat = 0
            if (song.avg_rating == 1) avg_rat = 20 
            else if (song.avg_rating == 2) avg_rat = 40
            else if (song.avg_rating == 3) avg_rat = 60
            else if (song.avg_rating == 4) avg_rat = 80
            else if (song.avg_rating == 5) avg_rat = 100
            return <tr>
            <td style={{width: '300px'}}> <Image src={'http://127.0.0.1:8000'+song.image} thumbnail='true' /></td>
            <td>{song.name}</td>
            <td>{song.artist}</td>
            <td><Rating ratingValue={avg_rat} /* Available Props */ /></td>
            <td> <RenderRating song={song} />  </td>
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
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
          {artists.map((artist) => {
            return <tr>
            <td>{artist.artist_name}</td>
            <td>{artist.artist_dob}</td>
            <td>{artist.artist_bio}</td>
          </tr>;
          })}
          </tbody>
        </Table>
     </div>
    </>
  );
};
