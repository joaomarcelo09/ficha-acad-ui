import axios, { type AxiosRequestConfig } from "axios";

const {
      VITE_API_URL
} = import.meta.env

const axiosInstance = (config?: AxiosRequestConfig) => axios.create({
      baseURL: config?.baseURL || VITE_API_URL.toString(),
      timeout: config?.timeout || 60000,
});

const errorHandler = (error: any) => {
      console.log(error)
      return Promise.resolve()
}
export const http = axiosInstance()
http.interceptors.request.use((request) => request, (error: any) => errorHandler(error));
http.interceptors.response.use((response: any) => response, async (error: any) => await errorHandler(error)
);