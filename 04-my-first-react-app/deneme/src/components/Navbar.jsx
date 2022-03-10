import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
         <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        {/* Navbar Start */}
        <div className="container-fluid nav-bar bg-transparent">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
              <div className="icon p-2 me-2">
                <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: '30px', height: '30px'}} />
              </div>
              <h1 className="m-0 text-primary">Makaan</h1>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link active">About</Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="property-list.html" className="dropdown-item">Property List</a>
                    <a href="property-type.html" className="dropdown-item">Property Type</a>
                    <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Error</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
            </div>
          </nav>
        </div>
        {/* Navbar End */}
        {/* Header Start */}
        <div className="container-fluid header bg-white p-0">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
              <h1 className="display-5 animated fadeIn mb-4">About Us</h1> 
              <nav aria-label="breadcrumb animated fadeIn">
                <ol className="breadcrumb text-uppercase">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-body active" aria-current="page">About</li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 animated fadeIn">
              <img className="img-fluid" src="img/header.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* Header End */}
      </div>
    </div>
  )
}

export default Navbar