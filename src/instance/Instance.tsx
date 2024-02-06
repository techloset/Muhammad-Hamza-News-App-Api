import axios, { AxiosInstance } from "axios";

const Instance = axios.create({
    baseURL: "https://api.nytimes.com/svc",
    params: {
      "api-key": process.env.REACT_APP,
    },
  });

export default Instance;

