import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-tm18.onrender.com"
});
