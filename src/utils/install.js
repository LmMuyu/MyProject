import { request } from "./request";

//向后台提交编辑数据
export function installUserEdit(config) {
  return request(config);
}
