import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <Navbar className="mr-auto navbar navbar-custom" fixed="top">
            <Nav>
                <Nav.Link href="/" className="navlinks nav-link-custom" to="/">Home</Nav.Link>
                <Nav.Link href="/about" className="navlinks nav-link-custom" to="/about">About</Nav.Link>
                <Nav.Link href="/projects" className="navlinks nav-link-custom" to="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact" className="navlinks nav-link-custom" to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNav;