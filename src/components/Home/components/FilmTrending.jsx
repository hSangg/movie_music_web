import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import MovieItem from './MovieItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '307px',
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0))',
      width: '5px',
      borderRadius: '20px',
    },
    '&::-webkit-scrollbar-track ': {
      backgroundColor: 'rgba(255, 255, 255, 0.123)',
      borderRadius: '20px',
    },
    '& > li': {
      width: '46%',
    },
  },
}))

function FilmTrending({ movieList = [] }) {
  const classes = useStyles()

  return (
    <>
      <Typography
        variant="h4"
        style={{
          transform: 'translate(7px,6px)',
          marginBottom: '10px',
          fontSize: '2rem',
          marginTop: '15px',
          fontWeight: '600',
        }}
      >
        #hot
      </Typography>
      <Box component="ul" className={`${classes.root} scrollBar`}>
        {movieList.map((movie) => {
          console.log(movie)
          return <MovieItem item={movie} />
        })}
      </Box>
    </>
  )
}

export default FilmTrending
