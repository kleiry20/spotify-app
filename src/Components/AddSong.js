import React, { useState } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";

export const AddSong = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header title="Spotify!" />
      <div className="container">
        <h3 className="my-3">Add Songs here</h3>
        <Form className="my-5">
          <Form.Group as={Row} className="mb-3" controlId="formSongName">
            <Form.Label column sm="2">
              Song Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter Song Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formDOR">
            <Form.Label column sm="2">
              Date of Release
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter Date of Release" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Artist
            </Form.Label>
            <Col sm="5">
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title="Search Artist"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm="5">
              <Button variant="outline-secondary" onClick={handleShow}>
                Add Artist here
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Artist Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Artist Name"
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
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Bio</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Cover Image
            </Form.Label>
            <Col sm="10">
              <Form.Control type="file" />
            </Col>
          </Form.Group>

          <Col sm="12" className="text-center">
            <Button variant="secondary" type="submit" className="my-3">
              Cancel
            </Button>
            <Button variant="success" type="submit" className="my-3 mx-2">
              Submit
            </Button>
          </Col>
        </Form>
      </div>
    </>
  );
};
