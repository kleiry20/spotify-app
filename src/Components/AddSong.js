import React, { useState, useEffect } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const AddSong = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState('');
  const [song, setSong] = useState({'avg_rating': 0});
  const [artist, setArtist] = useState({});
  const [artists, setArtists] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeSong = (e) => {
    song[e.target.name] = e.target.value;
  }

  const handleImageChange = (e) => {
    song[e.target.name] = e.target.files[0]
  };


  const handleSubmitSong = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', song.image, song.image.name);
    form_data.append('name', song.name);
    form_data.append('date_of_release', song.date_of_release);
    form_data.append('artist', parseInt(song.artist));
    form_data.append('avg_rating', song.avg_rating);

    axios.post(
      process.env.REACT_APP_API_URL + 'songs/create/', form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      alert('success');
      navigate('/home')
    })
  }

  
  const handleChangeArtist = (e) => {
    artist[e.target.name] = e.target.value;
  }


  const handleSubmitArtist = (e) => {
    e.preventDefault();
    console.log('You have submitted', userName, artist);
    axios.post(
      process.env.REACT_APP_API_URL + 'artists/create/', artist )
    .then(res => {
      alert('success');
      setShow(false);
    })
  }



  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + 'artists/list/')
    .then(response => {
      console.log(response.data);
      setArtists(response.data);
    })
  }, [show]);

  return (
    <>
      <Header title="Spotify!" />
      <div className="container">
        <h3 className="my-3">Add Songs here</h3>
        <Form className="my-5" onSubmit={handleSubmitSong}>
          <Form.Group as={Row} className="mb-3" controlId="formSongName">
            <Form.Label column sm="2">
              Song Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter Song Name" name="name" onChange={handleChangeSong} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formDOR">
            <Form.Label column sm="2">
              Date of Release
            </Form.Label>
            <Col sm="10">
              <Form.Control type="date" placeholder="Enter Date of Release" name="date_of_release" onChange={handleChangeSong} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              {song.artist}
            </Form.Label>
            <Col sm="5">
            <Form.Control as="select" value={song.artist} aria-label="Default select example" name="artist" onChange={handleChangeSong}>
              <option>Open this select menu</option>
              {artists.map((artist) => {
                  return <option value={artist.id}>{artist.artist_name}</option>;
              })}
            </Form.Control>
            </Col>
            <Col sm="5">
              <Button variant="outline-secondary" onClick={handleShow}>
                Add Artist here
              </Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Cover Image
            </Form.Label>
            <Col sm="10">
              <Form.Control type="file" name='image' onChange={handleImageChange} />
            </Col>
          </Form.Group>

          <Col sm="12" className="text-center">
            <Button variant="secondary" type="submit" className="my-3">
              Cancel
            </Button>
            <Button variant="success" type="submit" className="my-3 mx-2" onClick = {handleSubmitSong}>
              Submit
            </Button>
          </Col>
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmitArtist}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Artist Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Artist Name"
                        name="artist_name"
                        onChange={handleChangeArtist}
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Date of Birth"
                        name="artist_dob"
                        onChange={handleChangeArtist}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Bio</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={handleChangeArtist} name="artist_bio" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmitArtist}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
        </Form>
      </div>
    </>
  );
};
