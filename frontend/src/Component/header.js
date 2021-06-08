import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'

const header = () => {
    return (
 <header>
    <Navbar bg="dark"  varient="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
           <Nav.Link href="./cart">Cart</Nav.Link>
           <Nav.Link href="./login">Sign In</Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
  
    </Navbar>
</header>
    )
}

export default header
