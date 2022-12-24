import axios from "axios";

export const Axios = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  // Accept: "application/json",
  // delayed: true
});
// Axios.interceptors.request.use((config) => {
//     if (config.delayed) {
//         return new Promise(resolve => setTimeout(() => resolve(config), 1000));
//     }
//     return config;
// });
