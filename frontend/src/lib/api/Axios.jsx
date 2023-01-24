/* eslint-disable no-undef */
import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  Accept: 'application/json',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  // delayed: true
  // 'Access-Control-Allow-Origin': '*',
});

// Axios.interceptors.request.use((config) => {
//     if (config.delayed) {
//         return new Promise(resolve => setTimeout(() => resolve(config), 1000));
//     }
//     return config;
// });
