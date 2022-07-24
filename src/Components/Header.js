import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export default function Header(props) {

  const user_id = localStorage.getItem('user_id');
  const user_name = localStorage.getItem('username');
  const navigate = useNavigate();

  const logout = (e) => {
    localStorage.removeItem('username')
    localStorage.removeItem('user_id') 
    navigate('/')
  }

  return (
  <>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">{props.title}</a>
          {user_id ? <Button onClick={logout} className="btn btn-primary"> {user_name} Logout</Button> : ''}
        </div>
      </nav>
      </>
  )
}

Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}