import http from "./zhouWei-request/requestConfig";

export function request(config) {
  const { option, method = "GET", data, timeout = 10000 } = config;
  
  return http.request({
    url: `http://192.168.43.31:3000${option}`,
    method: method, // POST、GET、PUT、DELETE，具体说明查看官方文档
    data, //参数
    timeout: timeout, // 默认 30000 说明：超时时间，单位 ms，具体说明查看官方文档
    dataType: "json", // 默认 json 说明：如果设为 json，会尝试对返回的数据做一次 JSON.parse，具体说明查看官方文档
    responseType: "text", // 默认 text 说明：设置响应的数据类型。合法值：text、arraybuffer，具体说明查看官方文档
    withCredentials: false, // 默认 false 说明：跨域请求时是否携带凭证（cookies），具体说明查看官方文档）
    header: {
      //默认 无 说明：请求头
      "Content-Type": "application/json",
    },
    isFactory: true, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数将失去作用）
  });
}
