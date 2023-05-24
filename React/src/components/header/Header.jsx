
import React, { Fragment, useState } from 'react'
import * as FaIcons from 'react-icons/fa';

const Header = ({ isToogle }) => {
  
    const [toggled, setToggled] = useState(false);   

    // eslint-disable-next-line
    const toogleClik = () => {

         setToggled(!toggled);
         isToogle(toggled)  
    }  



    return (
      <Fragment> 
        <header className="app-header">
        <div className="app-leftarea">
            <h3>SISTEMA<span>IFSP</span></h3>
        </div>
        <div className="app-toggle">
            <i id="sidebar_toggle"><FaIcons.FaBars/></i>
        </div>
        <div className="profile">
            <img src='' alt="foto"/>
            <span>Francisco Santos</span>
            <div className="logout">
                <i><FaIcons.FaSignOutAlt/></i> 
            </div>
        </div>
        
        </header>
    </Fragment>
    
  )
}

export default Header





