import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.98.29:3333'
})
