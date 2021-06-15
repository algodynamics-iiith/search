import axios from "axios";
import { v4 as uuid } from "uuid";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getUserId = () => {
  let id = localStorage.getItem("user_id");
  if (id === null) {
    id = uuid();
    localStorage.setItem("user_id", id);
  }
  return id;
};

api.interceptors.request.use((request) => {
  request.headers["X-USER-ID"] = getUserId();
  return request;
});

export const submit = async (experimentKey, actionLog) => {
  await api.post("/submit", {
    key: experimentKey,
    log: actionLog,
  });
};

export const fetch = async (experimentKey) => {
  const response = await api.get("/fetch", {
    params: {
      key: experimentKey,
    },
  });
  return response.data;
};
