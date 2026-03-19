import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  withCredentials: true, // required for httpOnly cookies
})

export default api
