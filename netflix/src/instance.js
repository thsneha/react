import axios from 'axios'
// baseurl is common

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance
// axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US")
// instance.get=axios.get.
// In the instance.get the base url is formed as inbuilt.
// instance.get("/trending/all/week?api_key=${API_KEY}&language=en-US")
