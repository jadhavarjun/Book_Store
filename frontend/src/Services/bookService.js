import Axios from "./axiosServices";

const axios = new Axios();
const token = localStorage.getItem("token")
const baseUrl = "http://localhost:5000";

export default class services {

    getbook = () => {

        return axios.Get(`${baseUrl}/bookstore/get`, {
            headers: {
                token: token
            }
        })
    }
    addToCart=(data)=>{
        return axios.Post(`${baseUrl}/user/add_cart`, data, {
            headers: {
                token: token
            }
        });
    }
    getCartItem = () => {

        return axios.Get(`${baseUrl}/cart`, {
            headers: {
                token: token
            }
        })
    }

    updateCartItem = (data, id) => {

        return axios.Put(`${baseUrl}/cart/update/${id}`, data, {
            headers: {
                token: token
            }
        })
    }
}