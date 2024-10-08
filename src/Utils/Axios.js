import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
