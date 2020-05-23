import { request } from "./request";

export function homePlateData(plate) {
  return request({
    url: "/home",
    params: {
      plate,
    },
  });
}
