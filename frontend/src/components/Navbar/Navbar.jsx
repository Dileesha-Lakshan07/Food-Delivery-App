import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='nav bar'>
      <img src={assets.logo} alt="" />
    </div>
  )
}

export default Navbar
