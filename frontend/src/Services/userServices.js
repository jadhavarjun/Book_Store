import Axios from "./axiosServices";

const http = new Axios();

const baseUrl = "http://localhost:5000";

export default class services {
    Registration = (data) => {
        return http.Post(`${baseUrl}/registration`, data);
    };
    login = (data) => {
        return http.Post(`${baseUrl}/login`, data);
    }
    addToCart=(data)=>{
        return http.Post(`${baseUrl}/user/add_cart`, data, );
    }
}