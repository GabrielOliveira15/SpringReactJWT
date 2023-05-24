import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';


const SideBar = ({ sideBar }) => {

  // eslint-disable-next-line
  const [showSubMenu, setShowSubMenu] = useState(false);
  
  return (
    <Fragment>
      <div className="sidebar">
           <ul>
               <li className="list">
                <Link to="/home"> 
                 <i><FaIcons.FaDesktop/></i> 
                 <span className="link">Página Principal</span>
                </Link> 
               </li>
               <li className="list">
                <Link to="/professor/lista"> 
                 <i><FaIcons.FaCog/></i> 
                 <span className="link">Professor</span>
                </Link> 
               </li>
               <li className="list">
                <Link to="/aluno/lista"> 
                 <i><FaIcons.FaTable/></i> 
                 <span className="link">Aluno</span>
                </Link> 
               </li>
               <li className="list">
                <Link to="/cidade/lista"> 
                 <i><FaIcons.FaBuilding/></i> 
                 <span className="link">Cidade</span>
                </Link> 
               </li>
               <li className="list">
                <Link to="/disciplina/lista"> 
                 <i><FaIcons.FaBook/></i> 
                 <span className="link">Disciplina</span>
                </Link> 
               </li>
               <li className="list">
                <Link to="/avaliacao/lista"> 
                 <i><FaIcons.FaSlidersH/></i> 
                 <span className="link">Avaliação</span>
                </Link> 
               </li>
           </ul> 
        </div>
    </Fragment>
  )
}

export default SideBar



