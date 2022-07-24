import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import { useNavigate } from "react-router-dom";


import axios from 'axios';



export default function Register() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const user_id = localStorage.getItem('user_id');


  useEffect(() => {
    if (user_id){
      navigate('/home')
    }
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You have submitted', userName, process.env.API_URL);
    axios.post(
      process.env.REACT_APP_API_URL + 'users/create/', { name: userName })
    .then(res => {
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem('username', res.data.name);
      navigate('/home')
    })
  }

  return (
    <>
    <Header title="Spotify"/>
    <div class="container my-5">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" onChange={(e) => setUserName(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}


