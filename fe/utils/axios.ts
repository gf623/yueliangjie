import axios from 'axios'
import { message } from "antd";

const { REACT_APP_API_BASE } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_BASE,
  timeout: 60000,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    message.error(error?.response?.data?.message || "Request failed");
    return Promise.reject(error.response.data);
  },
);

export default instance;