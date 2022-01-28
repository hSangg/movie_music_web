const API_KEY = '013309bf6ddfc10b545ab52545894548'

const filmApi = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetTopRated: `/top_rated?api_key=${API_KEY}&language=end-US`,
}

export default filmApi
