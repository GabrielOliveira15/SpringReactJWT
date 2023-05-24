

import React from 'react'
import { useState, Fragment } from 'react'

const Search = ({ onSearch }) => {
   
    const [search, setSearch] = useState('');

    const onInputChange = (valor) => {
        setSearch(valor);
        onSearch(valor);

    }

  return (
    <Fragment>
       <form>
            <div className='row'>
                <label className="col-form-label col-12 col-sm-1">
                   Pesquisa:
                </label>
                <div className='col-9 col-sm-9 offset-md-1'>
                   <input 
                        type='text'
                        className='form-control'
                        placeholder='pesquisar dados'
                        value={search}
                        onChange={(e)=> onInputChange(e.target.value)  }
                   />
                </div>

            </div>
       </form>

    </Fragment>
  )
}

export default Search