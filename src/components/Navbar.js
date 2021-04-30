import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

function MyNav() {
    return (
    <Nav className="mr-auto navbar navbar-custom">
        <Link className="navlinks" to="/">Home</Link>
        <Link className="navlinks" to="/about">About</Link>
        <Link className="navlinks" to="/projects">Projects</Link>
        <Link className="navlinks" to="/contact">Contact</Link>
    </Nav>
    )
}

export default MyNav;