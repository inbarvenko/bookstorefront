import axios from "axios";
const URL_LOCAL = 'http://10.0.2.2:1337/'

export const axiosInstance = axios.create({
  baseURL: URL_LOCAL,
});
