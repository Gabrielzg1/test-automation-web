import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2020",
});

export const createAdminSession = async (email, password) => {
  return api.post("/adminSession", { email, password });
};

export const createUserSession = async (email, password) => {
  return api.post("/userSession", { email, password });
};

export const getSubjects = async (adminId) => {
  let url = `/admin/${adminId}`;
  return api.get(url);
};
