import axios from 'axios'
const baseUrl = 'http://localhost:5001/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/products`)
  return request.then(response => response.data)
}

export default {
  getAll
}