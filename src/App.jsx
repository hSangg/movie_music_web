import { makeStyles, Box, Grid, Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import filmApi from './api/filmAPI'
import './App.scss'
import Home from './components/Home'
import NavBar from './components/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem 5rem 0 5rem',
    backgroundColor: '#191919',
    border: '0.5px #ffffff26 solid',
    borderRadius: '25px',
  },
  left: {
    width: '400px',
  },
  center: {
    flex: 1,
    margin: theme.spacing(3, 0, 3, 0),
    borderRadius: '25px',
    backgroundColor: '#191919',
    border: '0.5px #ffffff26 solid',
  },
  right: { width: '400px' },
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Box className={classes.root}>
        <Grid container>
          <Grid item className={classes.left}>
            <NavBar />
          </Grid>
          <Grid item className={classes.center}>
            <Switch>
              <Route path="/home" exact>
                <Home fetchData={filmApi.fetchTrending} />
              </Route>
            </Switch>
          </Grid>
          <Grid item className={classes.right}></Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
