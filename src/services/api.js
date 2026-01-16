import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstack-backend-1-8gkn.onrender.com",
});

export default api;
