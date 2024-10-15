import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_MANZELI_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFTOKEN": process.env.REACT_APP_X_CSRF_TOKEN,
    Authorization: process.env.REACT_APP_AUTH_TOKEN,
  },
});

export default apiClient;
