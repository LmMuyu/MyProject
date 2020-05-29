import { axios } from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.43.31:3000",
    timeout: 5000,
    headers: {},
  });

  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //响应拦截
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


  return instance(config);
}
