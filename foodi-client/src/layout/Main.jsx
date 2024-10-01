import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
        <footer>footer</footer>
    </div>
  )
}

export default Main