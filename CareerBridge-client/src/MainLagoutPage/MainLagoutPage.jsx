import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const MainLagoutPage = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  )
}

export default MainLagoutPage