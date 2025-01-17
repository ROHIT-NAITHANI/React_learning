import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Footer/Footer'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout