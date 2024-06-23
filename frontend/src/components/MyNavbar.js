import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpeg'; // Adjust the path to your logo
import './MyNavbar.css'; // Import your custom CSS file for styling
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { resetState } from '../redux/slices/instructorParentSlice'

const MyNavbar = () => {
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.instructorParentLoginReducer);
  let dispatch = useDispatch()
  function click(){
		localStorage.removeItem('token')
		dispatch(resetState())
	  }
  if (!loginUserStatus) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="240"
              height="100"
              className="d-inline-block align-top"
              style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '20px', marginRight: '20px' }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Gallery</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', marginRight: '20px' }}>
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a href="https://www.unesco.org/en/articles/250-million-children-out-school-what-you-need-know-about-unescos-latest-education-data" style={{textDecoration:'none',color:'black'}} target='_blank'>Disability Rights</a></li>
                  <li><NavLink className="dropdown-item" to="schemes">Schemes</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Products</NavLink>
              </li>
            </ul>
            <div className="d-flex" style={{ paddingLeft: '250px' }}>
              <NavLink to="/volunteer" className="btn btn-outline-primary" style={{ margin: '10px' }}>Volunteer</NavLink>
              <NavLink to="/donor" className="btn btn-outline-success" style={{ margin: '10px' }}>Donate</NavLink>
              <NavLink to="/login" className="btn btn-outline-secondary" style={{ margin: '10px' }}>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  } else if (currentUser.userType === 'student') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="240"
              height="100"
              className="d-inline-block align-top"
              style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '20px', marginRight: '20px' }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/parent" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Progress</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }} onClick={click}>Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else if (currentUser.userType === 'admin') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="240"
              height="100"
              className="d-inline-block align-top"
              style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '20px', marginRight: '20px' }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/admin-upload" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Upload</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin-table" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Table</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }} onClick={click}>Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else if(currentUser.userType=='instructor') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="240"
              height="100"
              className="d-inline-block align-top"
              style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '20px', marginRight: '20px' }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/instructor-attendance" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Attendance</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/instructor-uploadimg" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Image</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/instructor-uploadprogress" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }}>Progress</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="" activeClassName="active" style={{ fontSize: '20px', marginRight: '20px' }} onClick={click}>Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default MyNavbar;
