import axios from "axios";
const baseUrl = "/api/makeupparticipants";

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default {create};
