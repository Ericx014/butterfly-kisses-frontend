import axios from "axios";
const baseUrl = "/api/login";

const setToken = (newToken) => {
  localStorage.setItem("token", `bearer ${newToken}`);
};

const login = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const getSessions = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.get("/api/sessions", config);
  return response.data;
};

export default {login, setToken, getSessions};
