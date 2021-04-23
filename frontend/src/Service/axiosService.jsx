import axios from 'axios';

export default class AxiosService{

    postMethod = (url, data, headers=false) => {
        return axios.post(url, data, headers)
    }
}
