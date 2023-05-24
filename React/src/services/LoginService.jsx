import http from '../config/Banco';


export const loginUsuario = async (login) =>{
    return http({
        method:'post',
        url:'/authenticate',
        data:login
    }).then((response)=>{
        return response.data;
   })
}