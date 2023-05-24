import { React, useState, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../../services/LoginService';


const Login = () => {
    // Login
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    // Cadastro
    /*const[ativo, setAtivo] = useState('');
    const[codigo_uuid, setCodigo_uuid] = useState('');
    const[content_type, setContent_type] = useState('');
    const[data, setData] = useState('');
    const[email, setEmail] = useState('');
    const[falha_login, setFalhalogin] = useState('');
    const[foto, setFoto] = useState('');
    const[usernamec, setUsernamec] = useState('');
    const[passwordc, setPasswordc] = useState('');*/

    const navigate = useNavigate();

const onSubmit = async (e) => {
    e.preventDefault()
    
    let usuario = {
        username,
        password,
    }

    console.log(usuario)
    login(usuario)
}

/*const onCadastrar = async (e) => {
    e.preventDefault()

    let usuario = {
        ativo: 1,
        codigo_uuid: 123456789,
        content_type: "application/json",
        data: '2023-05-21',
        email,
        falha_login: 0,
        foto: 'png.png',
        passwordc,
        usernamec: 'gabnet_valriel'

    }
}*/

    const login = async (usuario) => {
        const data = await loginUsuario(usuario);

        var tokenString = JSON.stringify(data);
        let data1 = tokenString.substring(10,200);
        data1 = 'Bearer ' + data1;

        localStorage.setItem('token', data1);
        Redirecionar();
    };

    const Redirecionar = ()=> {
        if (localStorage.getItem('token') !== null) {
            navigate("/peca/lista");
        }
    }

    // JS do login
    //  const switchers = [...document.querySelectorAll('.switcher')]

    /*switchers.forEach(item => {
        item.addEventListener('click', function() {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'))
            this.parentElement.classList.add('is-active')
        })
    })*/

    const TrocaLogin =() => {
        document.getElementById("cadastro").classList.remove("is-active");
        document.getElementById("login").classList.add("is-active");
    }

    const TrocaCadastro =() => {
        document.getElementById("login").classList.remove("is-active");
        document.getElementById("cadastro").classList.add("is-active");
    }

  return (
    <Fragment>
        <div className='cover'>
        <section className="forms-section">
            <h1 className="section-title">Acessar o sistema</h1>
            <div className="forms">
                <div id="login" className="form-wrapper is-active">
                <button type="button" className="switcher switcher-login" onClick={TrocaLogin}>
                    Logar
                    <span className="underline"></span>
                </button>
                <form className="form form-login">
                    <fieldset>
                    <legend>Por favor, entre com E-mail e senha</legend>
                    <div className="input-block">
                        <label htmlFor="login-email">E-mail</label>
                        <input 
                            id="login-email" 
                            type="email" 
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Digite o e-mail"
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="login-password">Password</label>
                        <input 
                            id="login-password" 
                            type="password" 
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite a senha"
                        />
                    </div>
                    </fieldset>
                    <button 
                        type="submit" 
                        className="btn-login"
                        onClick={(e) => onSubmit(e)}
                    >Acessar</button>
                </form>
                </div>
                <div id="cadastro" className="form-wrapper">
                <button type="button" className="switcher switcher-signup" onClick={TrocaCadastro}>
                    Cadastrar
                    <span className="underline"></span>
                </button>
                <form className="form form-signup">
                    <fieldset>
                    <div className="input-block">
                        <label htmlFor="signup-email">E-mail</label>
                        <input 
                            id="signup-email" 
                            type="email" 
                            required
                            placeholder="Digite o E-mail"
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-password">Senha</label>
                        <input 
                            id="signup-password" 
                            type="password" 
                            required
                            placeholder="Digite a senha"
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-password-confirm">Confirmar Senha</label>
                        <input 
                            id="signup-password-confirm" 
                            type="password" 
                            required
                            placeholder="Confirme a senha"
                        />
                    </div>
                    </fieldset>
                    <button type="submit" className="btn-signup">Cadatrar</button>
                </form>
                </div>
            </div>
            </section>
        </div>
    </Fragment>
  )
}

export default Login;