import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
function Main() {
  return (
    <div className='bg-prigmayBG'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main