import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className="navbartext" href="#entries">Journal Entries</Nav.Link>
    <Nav.Link className="navbartext" href="#change-password">Change Password</Nav.Link>
    <Nav.Link className="navbartext" href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className="navbartext" href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link className="navbartext" href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar" bg="primary" variant="dark" expand="md" collapseOnSelect>
    <Navbar.Brand className="navtitle" href="#">
      <p className="navtitle">open thought</p>
      <p className="navsub">a place to write, share, and connect</p>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbartext">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
