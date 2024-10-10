import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_MANZELI_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFTOKEN": process.env.REACT_APP_X_CSRF_TOKEN,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4NTQ5OTM0LCJpYXQiOjE3Mjg1MDM5NTAsImp0aSI6IjM2MGJmNDIyYTU5ODRjN2Y4ZGZkZDQ3YjE5ODlmODVjIiwidXNlcl9pZCI6MTUzLCJjbGllbnRfaWQiOjI3fQ.9BnLfexvp12mxv6XFeU0UQviHl9O5yFpy8d517hvWYo`,
  },
});

export default apiClient;
