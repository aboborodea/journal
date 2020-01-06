import React from 'react'
// import Drawer from '@material-ui/core/Drawer'
// import { makeStyles } from '@material-ui/core/styles'
// import Divider from '@material-ui/core/Divider'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'

const LandingPage = (props) => {
  // const drawerWidth = 240
  //
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     display: 'flex'
  //   },
  //   appBar: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth
  //   },
  //   drawer: {
  //     marginTop: 5,
  //     width: drawerWidth,
  //     flexShrink: 0
  //   },
  //   drawerPaper: {
  //     width: drawerWidth
  //   },
  //   toolbar: theme.mixins.toolbar,
  //   content: {
  //     flexGrow: 1,
  //     backgroundColor: theme.palette.background.default,
  //     padding: theme.spacing(3)
  //   }
  // }))
  //
  // const classes = useStyles()

  return (
    <div className="landing-page container-fluid">
      <p className="h">Welcome to Open Thought!</p>
      <p className="h2">Open Thought is an online journal where you can write freely about your biggest hopes and dreams, your favorite memories, or whatever is on your mind. </p>
    </div>
  )
}

export default LandingPage
