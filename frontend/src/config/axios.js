import axios from "axios";

const reactEnv = import.meta.env.VITE_REACT_APP_API_ENV;

const axiosInstance = axios.create({
  baseURL: `${reactEnv}`,
  Headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
