import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getFilms() {
    return apiClient.get(
      "3/movie/popular?api_key=d1ddc1dd2b2057ccf3df6e05f4df7787"
    );
  }
};
