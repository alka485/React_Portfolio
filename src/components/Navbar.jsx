/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem' to = "/">Home</Link>
            <Link className='desktopMenuListItem' to = "/about">About</Link>
            <Link className='desktopMenuListItem' to ="/portfolio">Portfolio</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src="" alt="" className="desktopMenuimg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar