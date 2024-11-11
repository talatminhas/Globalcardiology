import React from "react";
// In src/index.js or src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import logopng from "../../Images/pagepress_logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-0 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand mb-0" to="/">
            <figure>
              <img  className="Logo pt-1" src={logopng} to="/" />
            </figure>
          </NavLink>
          <button  className="navbar-toggler"  type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent"  aria-expanded="false"  aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 gap-4">
              <li className="nav-item">
                <NavLink to="/search" className="nav-link fw-light">
                  SEARCH
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link fw-light">
                  CONTACTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='d-flex text-decoration-none'>
                  <span to="/news" className="nav-link fw-light me-3">NEWS</span>
                  <span className="slash">|</span>
                </NavLink>
                </li> 
                <li className="nav-item">
                <NavLink to="/register" className="nav-link fw-light">
                  REGISTER
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link fw-light">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
