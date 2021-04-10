import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'

import StarIcon from '@material-ui/icons/Star'
import ArchiveIcon from '@material-ui/icons/Archive'
import ForumIcon from '@material-ui/icons/Forum'
import CreateIcon from '@material-ui/icons/Create'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import ConversationRouter from './screens/ConversationRouter'
import LoginScreen from './screens/LoginScreen'
import NewConversation from './screens/NewConversation'
import UserStatus from './components/UserStatus'
import SocketStatus from './components/SocketStatus'

import { doLogout } from './store/actions/accountActions'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
  },
  main: {
    padding: 15,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appToolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: '0 5px'
  },
  toolbarTitle: {
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#333',
    color: '#fff'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
  },
  hide: {
    display: 'none',
  },
}))


function App ({ account, ...props  }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    if (account.logged)
      setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuLink = (path, text, icon) => (
    <Link to={path} onClick={handleDrawerClose}>
      <ListItem button key={text}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.appToolbar}>
            {account.logged && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6">
              <Link to="/">
                <div className={classes.toolbarTitle}>
                  <span>LeRO</span>
                </div>
              </Link>
            </Typography>
            <div style={{ flex: '1' }} />
            <UserStatus />
            <SocketStatus />
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          className={classes.drawer}
          anchor="left"
          open={open}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
          <div className={classes.drawerContainer}>
            <Divider />
            <List>
              {menuLink("/", "Conversas", <ForumIcon style={{ color: '#fff' }} />)}
            </List>
            {account.logged && (
              <React.Fragment>
                <Divider />
                <List>
                  {menuLink("/new", "Nova Conversa", <CreateIcon style={{ color: '#fff' }} />)}
                </List>
                <List>
                  <ListItem onClick={() => {
                    props.doLogout()
                    handleDrawerClose()
                  }} button key='logout'>
                    <ListItemIcon>
                      <ExitToAppIcon style={{ color: '#fff' }}/>
                    </ListItemIcon>
                    <ListItemText primary='Sair' />
                  </ListItem>
                </List>
              </React.Fragment>)
            }
          </div>
        </SwipeableDrawer>
        {<main>
          <Container component="main" className={classes.main} maxWidth="md">
            {account.logged 
            ? (<Switch>
                <Route path="/favorite">
                  <p>Favorite</p>
                </Route>
                <Route path="/archived">
                  <p>Archived</p>
                </Route>
                <Route path="/new">
                  <NewConversation />
                </Route>
                <Route path="/">
                  <ConversationRouter />
                </Route>
              </Switch>)
            : (
              <LoginScreen />
            )}
          </Container>
        </main>}

      </div>
    </Router>
  )
}

function mapStateToProps(state) {
  return {
    account: state.account
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doLogout: () => dispatch(doLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
