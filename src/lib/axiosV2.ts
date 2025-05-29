import axios from "axios";

const apiV2 = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
});

export default apiV2;