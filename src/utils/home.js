import { request } from "./request";

//首页板块数据
export function homePlateData(plate,times=1) {
  console.log(plate,times);
  
  return request({
    url: "/home",
    params: {
      plate,
      times,
    },
  });
}
