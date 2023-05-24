
import axios from 'axios';
import { SERVIDOR } from './Config';

const http = axios.create({
    baseURL:SERVIDOR,
    headers:{
        'Content-type':'application/json',
    }
})

// Verifica se recuperou um token válido
/*let token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

// Enviar automaticamente o token no header da requisição
http.interceptors.request.use(
    function (request) {
        if (request.headers['Authorization']) {
            request.headers['Authorization'] = 'Bearer ' & (token);
        }
        return request;
    } , function (error) {
        return Promise.reject(console.log(error));
    }
)*/

export default http;