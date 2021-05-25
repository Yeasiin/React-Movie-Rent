import http from "./httpService";
import config from "../config.json";

const apiEndPoint = `${config.apiUrl}/genres`;

export function getGenres() {
  return http.get(apiEndPoint);
}
