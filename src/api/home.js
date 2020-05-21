import { request } from "./request";

export function homePlateData(plate) {
  return request({
    method: "post",
    url: plate,
    data: {
      name: "张三",
      age: 17,
    },
  });
}
