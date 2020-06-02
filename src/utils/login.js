import { request } from "./request";

//登录
export function loginInfoPost(config) {
  return request(config);
}

//第三方登录
export function loginThirdParty(config) {
  return request(config);
}
