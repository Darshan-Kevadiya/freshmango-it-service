import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo from "../assets/image/Fresh-Mango-Logo-3.svg";
const Header = () => {
  return (  
    <Navbar collapseOnSelect expand="lg" bg="#ffffff" className='pt-3 pb-3'>
      <Container className="p-lg-0 ps-sm-2 pe-sm-2">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="mango-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end align-self-end'>
          <Nav>
            <Nav.Link href="#" className="nav-active">IT Support</Nav.Link>
            <Nav.Link href="#">Computer Equipment</Nav.Link>
            <Nav.Link href="#">Cyber Security</Nav.Link>
            <Nav.Link href="#">The Cloud</Nav.Link>
            <Nav.Link href="#">Software</Nav.Link>
            <Nav.Link href="#">Websites</Nav.Link>
            <Nav.Link href="#">Offers & Events</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header