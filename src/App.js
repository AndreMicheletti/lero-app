import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
}))


function App (props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
					<div style={{ display: 'flex', flexDirection: 'row', flexShrink: 1, alignItems: 'center' }}>
						<a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography variant="h4" color="inherit" noWrap>
								LeRO
							</Typography>
						</a>
					</div>
        </Toolbar>
      </AppBar>

      <main>
        <Container component="main" className={classes.main} maxWidth="md">
        </Container>
      </main>

      <footer className={classes.footer}>
      </footer>

    </div>
  )
}

export default App;
