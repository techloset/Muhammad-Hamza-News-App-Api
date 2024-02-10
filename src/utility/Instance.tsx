import axios from "axios";

const Instance = axios.create({
    baseURL: "https://api.nytimes.com/svc",
    params: {
      "api-key": process.env.REACT_APP_API_KEY,
    },
  });

export default Instance;

