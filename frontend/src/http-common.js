import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://10.0.6.87:8443/',
  headers: {
    'Content-Type': 'application/json'
  }
})
