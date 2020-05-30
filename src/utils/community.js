import { request } from "./request";

//板块
export function communityPlateData(config) {
  return request(config);
}

//轮播图
export function communitySwiper(config) {
  return request(config);
}

//第一次进入社区时加载的数据
export function communityplate(plate, swiper) {
  return Promise.all([communityPlateData(plate), communitySwiper(swiper)]);
}
