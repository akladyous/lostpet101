import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export const api = axios.create({
    headers: { "Content-Type": "application/json" },
    Accept: "application/json",
    baseURL: BASE_URL,
    withCredentials: true,
})
