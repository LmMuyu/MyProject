import http from "./request";

export function homePlateData(data) {
  return http.get("/home", { params: data });
}
