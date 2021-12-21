import axios from "axios";

const KEY = "AIzaSyCEkgY8MSz8tUk7_9vI9hKS73b8ZEGnfJE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
