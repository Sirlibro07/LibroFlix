import axios from "axios";

const a = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
});

a.defaults.withCredentials = true;

export default a;
