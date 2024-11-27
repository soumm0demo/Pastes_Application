import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-x-4 text-3xl justify-evenly w-[600px]'>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default NavBar