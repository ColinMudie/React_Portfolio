import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNav() {
    return (
        <Navbar className="mr-auto navbar navbar-custom" fixed="top">
            <Nav>
                <Link  className="navlinks nav-link-custom" to="/">Home</Link>
                <Link  className="navlinks nav-link-custom" to="/about">About</Link>
                <Link  className="navlinks nav-link-custom" to="/projects">Projects</Link>
                <Link  className="navlinks nav-link-custom" to="/contact">Contact</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNav;