import React from 'react'
import { Outlet } from "react-router";
import Header from './Componets/header';
import Navber from './Componets/Navber';
import Footer from './Componets/Footer';


const RoutLayout = () => {
  return (
    <div>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RoutLayout
