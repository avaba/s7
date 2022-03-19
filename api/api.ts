import axios, {Axios} from "axios";

const api: Axios = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    baseURL: 'https://reqres.in/api/'
})

// Add a request interceptor
api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log("out:", config);
        return config;
    },
    function (error) {
        // Do something with request error
        console.log("out error:", error);

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        console.log("in:", response);
        return response;
    },
    function (error) {
        console.log(error.response);
    }
)

export default api;