import { React, Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import PECA from '../peca/Peca';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { listarPeca } from '../../services/PecaService';
import ShowMensagem from '../../components/mensagem/ShowMensagem';

function Lista() {
   
    const [titulo, setTitulo] = useState('')
    const [peca, setPeca] = useState([]) 
	const navigate = useNavigate();

	useEffect(() => {
		const getDataPeca = async () => {
			const response = await listarPeca();
			setPeca(response);
			setTitulo("Lista de Peças");
		}
		getDataPeca();
	}, []);

    /*useEffect(()=>{
       
        const getDataPeca = async () => {
           const response = await listarPeca();
           setTitulo("Lista de Peças")
           setPeca(response)
		   console.log(peca)
        }
        getDataPeca();
		
    },[]);*/

	// Fazer Logout(Apagar token do localStorage)
	const logout = () => {
		localStorage.removeItem("token");
		navigate("/");
	  };


    return (
    <Fragment>
        <div className="app-content">
			<ShowMensagem 
				titulo={titulo}
				iconTitulo={<FaIcons.FaListAlt/>}
				iconReturn={<AiIcons.AiFillDashboard/>}
				url="/home"
				tituloUrl="Dashboard"
			/>
			<div className="row">
				<div className="col-md-12">
					<div className="listagem">
						<div className="row justify-content-center">
							<form >
								<div className="row mb-3">
									<label htmlFor="filtro" className="col-sm-1 col-form-label">Filtro:</label>
									<div className="col-xs-11 col-sm-11 col-md-6 col-log-6">
										<input type="text" id="filtro" name="keyword"
											className="form-control" />
									</div>
									<div className="col-xs-12 col-sm-12 col-md-4 col-log-4">
										<button type="submit" className="btn btn-primary form-control">Pesquisar</button>
									</div>
								</div>

							</form>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							
								</div>							
							</div>
							<div id="no_more_table">
								<table id="tableProfessor"
									className="table table-striped table-bordered table-hover table-collapse cf"
									>
									<thead className="cf">
										<tr className="p-3 mb-2 bg-success text-white">
											<th>Email</th>										
										</tr>
									</thead>
									<tbody>
                                        {
                                        peca && peca.map(pecas => (
                                        <tr key={pecas.id_peca}>
											<td data-label="Id">{pecas.id_peca}</td>											       
										</tr>

                                            ))
                                        }
										
									</tbody>
								</table>
							</div>
							<nav aria-label="Page navigation example">
								<ul className="pagination justify-content-end">
									<li className="page-item disabled"><Link className="page-link"
										to="#" aria-disabled="true">Previous</Link></li>
									<li className="page-item"><Link className="page-link" to="#">1</Link></li>
									<li className="page-item"><Link className="page-link" to="#">2</Link></li>
									<li className="page-item"><Link className="page-link" to="#">3</Link></li>
									<li className="page-item"><Link className="page-link" to="#">Next</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<Link to="/professor/incluir" type="button"
								className="btn btn-primary btn-lg">Novo Professor</Link>
						</div>
						<div>
							<button className="btn btn-secondary btn-lg" onClick={logout}>
								Logout
							</button> 
						</div>
					</div>
				</div>
			</div>
		</div>
    </Fragment>
  )
}

export default Lista;