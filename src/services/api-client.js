import axios from "axios";
// I did not use it now cause it create bug with vercel after deploy
// import { API_CONFIG } from "../config"; // object contain my baseURL

// take instance from axios and modify its configurations
export const apiClient = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
  timeout: 30000,
});

// create interceptors when receive request from server
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

// create interceptors when receive response from server
apiClient.interceptors.response.use(
  // function if resolve
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
    });
  },
  // function if reject
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response.data.message,
    });
  }
);
