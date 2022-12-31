import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2020",
});

export const createAdminSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};
