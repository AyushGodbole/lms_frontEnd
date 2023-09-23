// axios is same as fetch
import axios from "axios";

// backend url to hit
const BASE_URL = 'http://localhost:8000/api/vi';

const axiosInstance = axios.create();

// default url to hit
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;