import  axios from "axios";

const api = axios.create({
  baseUrl : "http://localhost:5002/api"
});

export default api;