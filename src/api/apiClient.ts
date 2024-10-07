import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_MANZELI_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFTOKEN":
      "8Nyl4Bj3dfBb55Ec8f7skBjTAjzd4rw9xJ4FmlEBfjFPUu5cY7To7B8WZMKjK1iQ",
  },
});

export default apiClient;
