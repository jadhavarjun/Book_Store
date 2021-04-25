import Axios from "./axiosServices";

const http = new Axios();
const token = localStorage.getItem("Usertoken")
const baseUrl = "http://localhost:5000";

export default class services {

    getbook = () => {

        return http.Get(`${baseUrl}/bookstore/get`, {
            headers: {
                token: token
            }
        })
    }

}