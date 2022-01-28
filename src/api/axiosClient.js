import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function ({ data }) {
    return data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
