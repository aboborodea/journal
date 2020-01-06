import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'

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

const Header = ({ user }) => {
  const drawerWidth = 20

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    drawer: {
      width: `${drawerWidth}vw`,
      flexShrink: 0
    },
    drawerPaper: {
      width: `${drawerWidth}vw`
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  }))
  const classes = useStyles()
  if (user) {
    return (
      <div className='myRoot'>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            <ListItem>
              <Nav.Link className="navbartext" href="#entries">Journal Entries</Nav.Link>
            </ListItem>
            <ListItem button>
              <Nav.Link className="navbartext" href="#change-password">Change Password</Nav.Link>
            </ListItem>
            <ListItem button>
              <Nav.Link className="navbartext" href="#sign-out">Sign Out</Nav.Link>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
  return (
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
}

export default Header
