import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {},
  banner: {
    backgroundImage: 'url("/src/image/banner.png")',
    backgroundSize: 'cover',
    height: '414px',
    position: 'relative',
  },
  time: {
    fontSize: '2rem',
    marginLeft: '10px',
    '& span': {
      margin: '20px 5px 0 5px',
      padding: '0.4rem 0.6rem',
      fontSize: '1.3rem',
      background: '#ffffff47',
      borderRadius: '12px',
    },
  },
  text: {
    position: 'absolute',
    bottom: '18px',
    left: '23px',
  },
}))
function Banner() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <div className={classes.banner}>
        <div className={classes.text}>
          <Typography
            style={{
              transform: 'translate(0px, 8px)',
              fontSize: '3.5rem',
              fontWeight: '600',
            }}
          >
            Chapter 4
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="span"
              style={{ marginTop: '7px', fontSize: '2rem' }}
            >
              John Wick
            </Typography>
            <Typography className={classes.time} variant="span">
              <span>25</span>:<span>10</span>:<span>2022</span>
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Banner
