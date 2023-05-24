import http from '../config/Banco';

export const listarPeca = async () => {
    return(
        http({
            method:'get',
            url:'/peca/lista',
            headers: {'Authorization':localStorage.getItem('token')}
        }).then((response)=>{
             return response.data;
        })
    )
}


/*export const incluirProfessor = async (professor) => {
   return (
    http({
        method:'post',
        url:'/professor/incluir',
        data:professor
    }).then((response)=>{
        return response.data;
    })
   )   
}


export const lerIdProfessor = async ( id ) => {
    console.log(id)
    return(
        http({
            method: 'get',
            url: `/professor/consultar-por-id/${id}`
        }).then((response)=>{
            return response.data;
        })
    )
}

export const alterarProfessor = async (id, professor) => {
    return (
     http({
         method:'put',
         url:`/professor/alterar/${id}`,
         data:professor
     }).then((response)=>{
         return response.data;
     })
    )   
 }

 export const excluirProfessor = async (id) => {
    return (
     http({
         method:'delete',
         url:`/professor/excluir/${id}`,
     }).then((response)=>{
         return response.data;
     })
    )   
 }*/