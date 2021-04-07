import React from 'react'
import clsx from 'clsx';
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
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'

import StarIcon from '@material-ui/icons/Star'
import ForumIcon from '@material-ui/icons/Forum'
import ArchiveIcon from '@material-ui/icons/Archive'
import CreateIcon from '@material-ui/icons/Create'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import ConversationRouter from './screens/ConversationRouter'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appToolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  toolbarTitle: {
    display: 'flex',
    flexDirection: 'column'
  },
  loginButton: {
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
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}))


function App (props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <Link to="/">
                <div className={classes.toolbarTitle}>
                  <span style={{}}>LeRO</span>
                  <span style={{ fontSize: '0.65em' }}>Leitor Editor de Respostas Ocultas</span>
                </div>
              </Link>
            </Typography>
            <div style={{ flex: '1' }} />
            <Button color="inherit" className={classes.loginButton}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          className={classes.drawer}
          anchor="left"
          open={open}
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
              {menuLink("/conversations", "Conversas", <ForumIcon style={{ color: '#fff' }} />)}
              {menuLink("/favorite", "Favoritos", <StarIcon style={{ color: '#fff' }} />)}
              {menuLink("/archived", "Arquivados", <ArchiveIcon style={{ color: '#fff' }} />)}
            </List>
            <Divider />
            <List>
              {menuLink("/new", "Nova Conversa", <CreateIcon style={{ color: '#fff' }} />)}
            </List>
          </div>
        </SwipeableDrawer>

        <main>
          <Container component="main" className={classes.main} maxWidth="md">
            <Switch>
              <Route path="/conversations">
                <ConversationRouter />
              </Route>
              <Route path="/favorite">
                <p>Favorite</p>
              </Route>
              <Route path="/archived">
                <p>Archived</p>
              </Route>
              <Route path="/new">
                <p>New</p>
              </Route>
              <Route path="/">
                <p>Home</p>
              </Route>
            </Switch>
          </Container>
        </main>

      </div>
    </Router>
  )
}

export default App;
