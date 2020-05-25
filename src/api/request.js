import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 5000,
  });

  //请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance(config);
}
