import AxiosService from './axiosService'

let axiosService = new AxiosService();

let baseUrl = "http://localhost:5000";
export default class UserService{
    registration=(data)=>{
        return axiosService.postMethod(`${baseUrl}/registration`,data);
    }
    login=(data)=>{
        return axiosService.postMethod(`${baseUrl}/login`,data);
    }
}