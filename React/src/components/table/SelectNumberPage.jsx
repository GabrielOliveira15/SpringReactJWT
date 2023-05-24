
import React, { Fragment, useState } from 'react'

const page = [5,10,15,20];


const SelectNumberPage = ({ tamanhoPagina, changePageSize }) => {

    const [ tamanhoDaPagina, setTamanhoDaPagina ] = useState(tamanhoPagina); 
    
    const setPagina = (tamanho) => {
        setTamanhoDaPagina(tamanho)
        changePageSize(tamanho)
    }
    

    return (
      <Fragment>
         <div className='form-group row'>
            <label className='col-4'> 
               Tamanho Página:
            </label>
            <div className='col-3'>
                <select className='form-control'
                    onChange={(e)=> setPagina(e.target.value)}
                    value={tamanhoDaPagina}>
                    {
                        page.map((size)=>(
                          <option key={size} value={size}>
                            {size}     
                          </option>
                        ))
                    }        
                </select>
            </div>
         </div>
      </Fragment>
    )
}

export default SelectNumberPage