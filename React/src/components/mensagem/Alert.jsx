

import React, { Fragment, useState } from 'react'
import check from '../../assets/img/check.svg';
import error from '../../assets/img/error.svg';
import info from '../../assets/img/info.svg';
import warning from '../../assets/img/warning.svg';

const Alert = ( props ) => {
  
    const { show, mensagem, setShow, tipo } = props;

    const [showAlert, setShowAlert] = useState(true);

    let icon;

    const onCloseAlert = () => {
        setShowAlert(!showAlert);
        setShow();
    }

    if (tipo === 'success'){
       icon = check;
    } else if (tipo ==='info'){
       icon = info;
    } else if (tipo ==='warning'){
       icon = warning;
    } else if (tipo ==='danger'){
       icon = error;
    }



  return (
    <Fragment>
        {
            show && showAlert && (
               <div className={`alert alert-${tipo} alert-dismissible fade show role='alert' `}>
                    <img src={icon} className="show-imagem"/>
                    <span>
                        <strong className='show-mensagem'>
                              {mensagem}
                              <span className='close-btn' onClick={()=>onCloseAlert()}>
                                  X
                              </span>
                        </strong>
                    </span>
               </div>
            )
        }
    </Fragment>
  )
}

export default Alert