import axios from "axios";

/* create an instance and using the axios method .create to get the base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
