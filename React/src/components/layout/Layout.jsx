import React, { Fragment, useState } from 'react'
import Content from '../content/Content'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'

const Layout = ({ children }) => {

  const [toggle, setToggle] = useState(true);

  const toogleMenu = () =>{
    setToggle(!toggle);
  }


  return (
    <Fragment>
        <Header isToogle={toogleMenu}/>
        <SideBar sideBar={toggle}/>
        <Content sideBar={toggle}>
            { children } 
        </Content>
    </Fragment>
  )
  
}

export default Layout;
