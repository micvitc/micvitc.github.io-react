import React from 'react';
import logo from '../MIC_logo.png';
import "../Nav.css"
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Events from './Events';
import OurTeam from './OurTeam';
import Gallery from './Gallery';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';

export default function Screen() {
    return (
        <div className='nav-background'>
        <img src={logo} alt="MIC logo" />
            <nav className="navbar navbar-expand-lg navbar-dark nav-style">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/ourTeam">Our Team</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/blogs">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/events' element={<Events/>}/>
                <Route exact path='/ourTeam' element={<OurTeam/>}/>
                <Route exact path='/gallery' element={<Gallery/>}/>
                <Route exact path='/blogs' element={<Blogs/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    
    )
}
