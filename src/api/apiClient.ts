import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
