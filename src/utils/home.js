import { request } from "./request";

//option:请求地址，必填 data:参数 method 请求方式

export async function homePlateData(config) {
  let data = await request(config);

  return data;
}

//点赞模块
export function homeLike(config) {
  return request(config);
}
