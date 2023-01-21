import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  // Accept: 'application/json',
  // delayed: true
});
// Axios.interceptors.request.use((config) => {
//     if (config.delayed) {
//         return new Promise(resolve => setTimeout(() => resolve(config), 1000));
//     }
//     return config;
// });
