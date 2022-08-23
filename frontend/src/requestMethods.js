import axios from "axios";


const BASE_URL="https://buyerfriendly.herokuapp.com";
const token="skdfslfksdsdfkjsfkskfj";

export const publicRequest=axios.create({
    baseURL:BASE_URL
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    token:`Bearer ${token}`
})