import React from 'react'
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
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import StarIcon from '@material-ui/icons/Star'
import ForumIcon from '@material-ui/icons/Forum'
import ArchiveIcon from '@material-ui/icons/Archive'
import CreateIcon from '@material-ui/icons/Create'

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
  },
  appToolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))


function App (props) {
  const classes = useStyles()

  const menuLink = (path, text, icon) => (
    <Link to={path}>
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
            <Typography variant="h6">
              <Link to="/">
                <span style={{ fontSize: '1.3em'}}>LeRO</span>  - Leitor Editor de Respostas Ocultas
              </Link>
            </Typography>
            <Button color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar />
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
        </Drawer>

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
