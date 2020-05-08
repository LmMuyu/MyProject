import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
  });

  //请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config;
    },
    (err) => {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    (res) => {
      // Do something before response is sent
      return res;
    },
    (err) => {
      // Do something with response error
      return Promise.reject(err);
    }
  );

  return instance(config);
}
