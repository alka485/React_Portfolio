/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
//-------------------------dependency
import contacticon from '../assets/envelope.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem' to = "/">Home</Link>
            <Link className='desktopMenuListItem' to = "/about">About</Link>
            <Link className='desktopMenuListItem' to ="/portfolio">Portfolio</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src={contacticon} alt="" className="desktopMenuimg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar