import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle={fontWeight: "bold", color: "blue"};
    return (
        <nav>
            <Navbar  bg="white" variant="dark">
                <Container gap={3}>
                <Navbar.Brand href="#home"><img src="https://i.ibb.co/cTfx5w7/logo.png" alt="" width="60" height="auto" className="d-inline-block align-text-top"/></Navbar.Brand>
                 
                <Stack direction="horizontal" gap={3}>
                <NavLink className="nav-style" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="nav-style" activeStyle={activeStyle} to="/ukuniversities">UK Universities</NavLink>
                <NavLink className="nav-style" activeStyle={activeStyle} to="/ourservices">Our Services</NavLink>
                <NavLink className="nav-style" activeStyle={activeStyle} to="/aboutus">About Us</NavLink>
                <NavLink className="nav-style" activeStyle={activeStyle} to="/blogs">Blogs and News</NavLink>
                </Stack>
                </Container>
            </Navbar>  
        </nav>
    );
};

export default Header;