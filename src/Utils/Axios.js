import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL;

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
  }
};
