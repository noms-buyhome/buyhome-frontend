import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
  // withCredentials: true
});
