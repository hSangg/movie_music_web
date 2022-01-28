import { Box, makeStyles, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import { getFilmBanner } from '../../common/getFilmBanner'

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      filter: 'brightness(1.3)',
      transform: 'scale(1.02)',
    },

    transition: '.2s cubic-bezier(0, 0.63, 0.58, 1)',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '20px',
    margin: theme.spacing(1),
    background: 'linear-gradient(90deg, #6c39c77d   , transparent 9%)',
  },
  img: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(90deg, #191919, transparent 30%)',
  },
  text: {
    margin: '15px 0 0 15px',
  },
  name: {
    fontWeight: '600',
    marginBottom: '5px',
  },
  view: {
    fontSize: '1.4rem',
    fontWeight: '400',
    marginBottom: '5px',
  },
  type: {},
  image: {
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    height: '100%',
    width: '290px',
  },
}))

function MovieItem({ item }) {
  console.log('item: ', item)
  const { original_title, popularity, media_type, backdrop_path, id } = item
  const classes = useStyles()
  const thumbnail = getFilmBanner(backdrop_path)
  return (
    <>
      <li className={classes.root} key={id}>
        <Box className={classes.text}>
          <Typography variant="h4" className={classes.name}>
            {original_title || 'update...'}
          </Typography>
          <Typography variant="h6" className={classes.view}>
            {popularity} <span>Lượt xem</span>
          </Typography>
          <Rating
            value={Math.floor(Math.random() * 2) + 4}
            readOnly
            size="small"
            style={{
              borderRadius: '20px',
              background: '#ffb40021',
              padding: '0.5rem 0.9em',
              marginBottom: '5px',
              marginTop: '5px',
            }}
          />
        </Box>
        <Box className={classes.img}>
          <div className={classes.overlay}></div>
          <img src={thumbnail} alt={original_title} className={classes.image} />
        </Box>
      </li>
    </>
  )
}

export default MovieItem
