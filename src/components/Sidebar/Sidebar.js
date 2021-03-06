import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Nav from 'react-bootstrap/Nav'

const Sidebar = () => {
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
            <Nav.Link className="navbartext" style= {{ fontSize: 32 }} href="#entries">Journal Entries</Nav.Link>
          </ListItem>
          <div className="auth-fixed">
            <ListItem button>
              <Nav.Link className="navbartext" href="#change-password">Change Password</Nav.Link>
            </ListItem>
            <ListItem button>
              <Nav.Link className="navbartext" href="#sign-out">Sign Out</Nav.Link>
            </ListItem>
          </div>
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar
