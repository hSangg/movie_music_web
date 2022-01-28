import { Box, makeStyles, Typography } from '@material-ui/core'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded'
import React from 'react'
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {},
  nav: {
    backgroundColor: '#191919',
    position: 'relative',
    border: '0.5px #ffffff26 solid',
    margin: theme.spacing(3),
    fontSize: '1.2rem',
    padding: theme.spacing(2),
    color: '#fff',
    borderRadius: '30px',
  },
  components: {
    '& > p': {
      fontSize: '20px',
      marginBottom: '2rem',
      fontWeight: '600',
    },
    marginBottom: '7rem',
    marginTop: '2rem',
    marginLeft: '1.5rem',
  },
  tool: {
    '& > p': {
      fontSize: '20px',
      marginBottom: '2rem',
      fontWeight: '600',
    },
    marginBottom: '30rem',
    marginLeft: '1.5rem',
  },
  gradient: {
    position: 'absolute',
    bottom: '140px',
    left: '0',
    right: '0',
    height: '125px',
    background: 'linear-gradient(0deg, #673ab7, transparent)',
  },
  premium: {
    left: '0',
    right: '0',
    border: '1px #ffffff14 solid',
    bottom: '0',
    padding: '0 20px',
    position: 'absolute',
    background: '#1f1f1f',
    minHeight: '200px',
    textAlign: 'center',
    borderRadius: '21px',
  },
  head: {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginTop: '13px',
  },
  time: {
    fontSize: '2rem',
    marginTop: '20px',
    marginBottom: '3rem',
    '& span': {
      margin: '20px 5px 0 5px',
      padding: '0.4rem 0.6rem',
      background: '#ffffff29',
      borderRadius: '12px',
    },
  },
  sale: {
    zoom: '1.2',
    background: 'linear-gradient(to bottom, #a898c7, #4a00e0)',
    padding: '5px 0',
    position: 'relative',
    fontSize: '1.8rem',
    marginTop: '15px',
    borderRadius: '20px',
  },

  icon: {
    background: '#4f4f4f',
    padding: '9px 13px',
    color: '#fff',
    borderRadius: '50px',
    zoom: '1.2',
    '& > svg': {
      marginTop: '0px',
      position: 'relative',
      top: '4px',
    },
  },
}))

function NavBar() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.logo}></div>
      <div className={classes.nav}>
        <Box className={classes.components}>
          <Typography
            style={{
              gap: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '4rem',
              opacity: '0.5',
            }}
          >
            <NavLink to="/home">
              <span
                className={classes.icon}
                style={
                  {
                    //
                  }
                }
              >
                <HomeRoundedIcon fontSize="large" />
              </span>
            </NavLink>
            <span> Home</span>
          </Typography>
          <Typography
            style={{
              gap: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '4rem',
              opacity: '0.5',
            }}
          >
            <NavLink to="/music">
              <span className={classes.icon}>
                <MusicNoteRoundedIcon fontSize="large" />
              </span>
            </NavLink>
            <span> Music</span>
          </Typography>
          <Typography
            style={{
              gap: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '4rem',
              opacity: '0.5',
            }}
          >
            <NavLink to="/love">
              <span className={classes.icon}>
                <FavoriteRoundedIcon fontSize="large" />
              </span>
            </NavLink>
            <span> Love</span>
          </Typography>
        </Box>
        <Box className={classes.tool}>
          <Typography
            style={{
              gap: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '4rem',
              opacity: '0.5',
            }}
          >
            <NavLink to="/setting">
              <span className={classes.icon}>
                <SettingsRoundedIcon fontSize="large" />
              </span>
            </NavLink>
            <span> Setting</span>
          </Typography>
          <Typography
            style={{
              gap: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '20rem',
              opacity: '0.5',
            }}
          >
            <NavLink to="/logout">
              <span className={classes.icon}>
                <LockRoundedIcon fontSize="large" />
              </span>
            </NavLink>
            <span> Log out</span>
          </Typography>
        </Box>
        <Box className={classes.gradient}></Box>
        <Box className={classes.premium}>
          <Typography
            style={{
              display: 'flex',
              gap: '5px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1rem',
            }}
          >
            <span style={{ fontSize: '1.9rem' }}>Premium</span>
            <span style={{ display: 'block', width: '42px' }}>
              <img src="/src/image/crown-front-gradient.png" />
            </span>
          </Typography>
          <Typography className={classes.time}>
            <span>01</span>:<span>10</span>:<span>25</span>
          </Typography>
          <Typography className={classes.sale}>
            <span
              style={{
                borderRadius: 'inherit',
                background: '#1f1f1f',
                padding: '4px 71px',
              }}
            >
              <span style={{ fontSize: '1.6rem' }}>Sale up to 70%</span>
            </span>
          </Typography>
          <div></div>
        </Box>
      </div>
    </Box>
  )
}

export default NavBar
