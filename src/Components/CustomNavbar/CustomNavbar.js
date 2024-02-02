import './CustomNavbar.css';
import React, { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('#1e1e1e');
  const [logoSrc, setLogoSrc] = useState('/assests/img/logowhite.png');

  const toggleStyle = {
    backgroundColor: navbarBackground,
    transition: 'background-color 0.3s ease',
  };

  const toggleButtonStyle = {
    backgroundColor: '#b0b0b0',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      if (scrollPosition > navbarHeight) {
        setNavbarBackground('#ffffff');
        setLogoSrc('/assests/img/logoblack.png');
      } else {
        setNavbarBackground('#1e1e1e');
        setLogoSrc('/assests/img/logowhite.png');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className="p-3 pt-4 fixed-top" style={toggleStyle} variant="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="img-fluid px-3" src={logoSrc} alt="Logo" style={{ width: "200px", height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" style={toggleButtonStyle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto px-5">
          <Nav.Link className="nav-link-custom" style={{ color: "#a4a4a4" }} href="/">HOME</Nav.Link>
          <Nav.Link className="nav-link-custom" style={{ color: "#a4a4a4" }} href="/products">PRODUCTS</Nav.Link>
          <Nav.Link className="nav-link-custom" style={{ color: "#a4a4a4" }} href="/careers">CAREERS</Nav.Link>
          <Nav.Link className="nav-link-custom" style={{ color: "#a4a4a4" }} href="/blogs">BLOGS</Nav.Link>
          <Nav.Link className="nav-link-custom" style={{ color: "#a4a4a4" }} href="/contacts">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
