import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "f291cf98d61e4a6a94544fe013d631e4",
  },
});