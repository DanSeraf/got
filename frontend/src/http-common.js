import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://f-got.com/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})
