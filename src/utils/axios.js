import axios from 'axios';

const API_URL = 'YOUR_SERVER_ADDRESS';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

export const setAuthHeader = (accessToken) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const resetAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;
