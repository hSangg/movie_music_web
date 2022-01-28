import { Box, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../api/axiosClient'
import Banner from './components/Banner'
import FilmTrending from './components/FilmTrending'

const useStyles = makeStyles((theme) => ({
  root: { color: '#fff', padding: '24px' },
}))

function Home({ fetchData }) {
  const [movie, setMovie] = useState([])
  const classes = useStyles()
  useEffect(() => {
    ;(async () => {
      try {
        const { results } = await axiosClient.get(fetchData)
        setMovie(results)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <Box className={classes.root}>
      <Banner />
      <FilmTrending movieList={movie} />
    </Box>
  )
}

export default Home
