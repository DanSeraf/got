import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://95.179.134.131:8443/',
  headers: {
    'Content-Type': 'application/json'
  }
})
