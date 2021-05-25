import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndPoint = `${config.apiUrl}/auth`;
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function loginWithJwt(jwtKey) {
  localStorage.setItem(tokenKey, jwtKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
http.setJwt(getJwt());

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
};
