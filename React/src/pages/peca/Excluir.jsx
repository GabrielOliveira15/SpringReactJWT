
import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { lerIdProfessor, excluirProfessor } from '../../services/ProfessorService';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { listarCidade } from '../../services/CidadeService';
import Alert from '../../components/mensagem/Alert';

const Excluir = () => {
   
   const { id } = useParams();

   const [idProfessor, setIdProfessor] = useState('');
   const [codProfessor, setCodProfessor] = useState('');
   const [nomeProfessor, setNomeProfessor] = useState('');
   const [nomeCidade, setNomeCidade] = useState('');
   const [show, setShow] = useState(false);
   const [mensagem, setMensagem] = useState('');
   const [tipo, setTipo] = useState('');
   

    useEffect(() => {
      
        const lerProfessor = async () => {
            const data = await lerIdProfessor(id);
            setIdProfessor(data.object.idProfessor);
            setCodProfessor(data.object.codProfessor);
            setNomeProfessor(data.object.nomeProfessor);
            setNomeCidade(data.object.cidade.nomeCidade);
        }
        lerProfessor();
    }, [id]);

    const onSubmitProfessor = (e) => {
      e.preventDefault();
      deletarProfessor(id)
   }

   const deletarProfessor = async ( id ) => {
        const data = await excluirProfessor(id);
        if (data.status === 200){
           setMensagem(data.mensagem);
           setTipo('danger');
           setShow(true);
        } 
   }


  return (
    <Fragment>
       <div className="app-content">
         <ShowMensagem 
            titulo="Cadastro de Professores"
            iconTitulo={<GiIcons.GiTeacher/>}
            iconReturn={<FaIcons.FaListAlt/>}
            url="/professor/lista"
            tituloUrl="Página Principal"
         />
         <div className="row justify-content-center">
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8'>
               { show && (
                     <Alert mensagem={mensagem}
                            show={show}
                            tipo={tipo}
                            setShow={()=>setShow(false)}/>
                  )
               }

            </div>
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
           
            <div className="cadastro">
               
               <form className='mt-3' onSubmit={onSubmitProfessor}>

                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='idProfessor' className='control-label'>Id:</label>
                               <input id='idProfessor'
                                      name='idProfessor'
                                      defaultValue={idProfessor}
                                      className="form-control" /> 
                           </div>
                        </div> 
                  </div>  
                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='codProfessor' className='control-label'>Código:</label>
                               <input id='codProfessor'
                                      name='codProfessor'
                                      defaultValue={codProfessor}
                                      className="form-control"/> 
                           </div>
                        </div> 
                  </div> 
                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='nomeProfessor' className='control-label'>Nome:</label>
                               <input id='nomeProfessor'
                                      name='nomeProfessor'
                                      defaultValue={nomeProfessor}
                                      className="form-control"/> 
                           </div>
                        </div> 
                  </div> 

                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='idCidade' className='control-label'>Cidade:</label>
                               <input id='idCidade'
                                      name='idCidade'
                                      defaultValue={nomeCidade}
                                      className="form-control"/>
                                   
                           </div>
                        </div> 
                  </div> 

                  <div>
                       <button type="submit"
                          className='btn btn-danger btn-lg'
                       >Excluir</button>
                       <Link 
                          to='/professor/lista'
                          type='button'
                          className='btn btn-secondary btn-lg'
                       >Cancelar</Link>
                  </div> 




               </form>


            </div>

         </div>

         </div> 
       </div>
    </Fragment>
  )
}

export default Excluir