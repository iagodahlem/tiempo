import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const BASE_URL = `${API_URL}/v1`

axios.defaults.baseURL = BASE_URL

export const get = (url) => axios.get(url)

export const post = (url, data) => axios.post(url, data)
