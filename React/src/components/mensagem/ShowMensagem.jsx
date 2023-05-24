
import React, { Fragment } from 'react' 

import { Link } from 'react-router-dom'


function ShowMensagem  ({titulo,iconTitulo,iconReturn,url,tituloUrl}) {
	return (
    <Fragment>
       <div className="app-titulo">
				<div>
					<h3>
					  <i>{iconTitulo}</i>
                       { titulo }
					</h3>
				</div>
				<ul className="app-breadcrumb breadcrumb">
					<li className="breadcrumb-item"><i>{iconReturn}</i></li>
					<li className="breadcrumb-item"><Link to={url}>{tituloUrl}</Link></li>
				</ul>
		</div>
    </Fragment>
  )
}    

export default ShowMensagem

