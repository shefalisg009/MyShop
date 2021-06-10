import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container } from 'react-bootstrap'

const header = () => {
    return (
 <header>
    <Navbar bg="dark"  varient="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to = "/">
           <Navbar.Brand>MyShop</Navbar.Brand>
          </LinkContainer>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
           <LinkContainer to = "./cart">
            <Nav.Link>Cart</Nav.Link>
           </LinkContainer>
           <LinkContainer to = "./login">
           <Nav.Link >Sign In</Nav.Link>
           </LinkContainer>
           </Nav>
          </Navbar.Collapse>
        </Container>
  
    </Navbar>
</header>
    )
}

export default header
