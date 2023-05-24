
import React, { Fragment } from 'react'

const Mensagem = ({ mensagem }) => {
  return (
    <Fragment>
        {
          <div className="invalid-feedback">
            {
                <p style={{ margin:"0" }}>
                    <span>{ mensagem }</span>
                </p>
            }
          </div>
        }
    </Fragment>
    
  )
}

export default Mensagem