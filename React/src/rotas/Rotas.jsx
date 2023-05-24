
import React from 'react'
import { Outlet } from "react-router-dom"
import Layout from '../components/layout/Layout';

const Rotas = () => {
  return (
    <Layout>
         {<Outlet/> }
    </Layout>
  )
}

export default Rotas;
