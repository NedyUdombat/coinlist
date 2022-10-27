import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Config from "react-native-config";

const httpClient: AxiosInstance = axios.create({
  baseURL: Config.BASE_API_URL,
  headers: {
    accept: "*/*",
  },
});

export const http = async (apiParams: AxiosRequestConfig<any>) =>
  await httpClient.request(apiParams);
