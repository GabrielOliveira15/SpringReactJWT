import { Component, Redirect } from "react";

const useAuth = () => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token");
        if (isAuth) {
            return <Component />;
        } else {
            return <Redirect to="/" />
        }
    }
    return AuthRoute;
       
    /*const{usuariologado, setUsuarioLogado} = useState({});

    useEffect(() => {
        function validarToken(){
            // eslint-disable-next-line
            const acessToken = localStorage.getItem('token');
        }
        validarToken();
    })

    const acesso = async (login) => {
        let isLogado = false;
        const data = await loginUsuario(login);
        if ( data != null) {
            isLogado = true;
            setUsuarioLogado(data);
            setToken(data);
        }
        
        return (isLogado);
    }

    const setToken = (data) => {
        localStorage.setItem('token', data.token);
    }

    const pegarUsuarioLogado = () => {
        return Object.values(usuariologado).length === 0 ? false : true;
    }

    return {
                acesso, pegarUsuarioLogado
            }*/

}

export default useAuth;