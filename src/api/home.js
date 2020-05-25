import { request } from './request';

export async function homePlateData(data) {
  let { plate, times } = data;

  return request({
    url: "/home",
    params: {
      plate,
      times,
    },
  });
}
