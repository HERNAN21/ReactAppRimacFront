import axios from "axios";


export const API_NODE_URL =
  process.env.REACT_APP_API_NODE || "http://localhost:5000";

//JAVA
let config = {
  baseURL: API_NODE_URL,
  headers: {
    "Content-Type": "application/json"
  }
};
const http = axios.create(config);

export const updateTokenToHttpNode = (token: string) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const http_node = http;

export default http;
