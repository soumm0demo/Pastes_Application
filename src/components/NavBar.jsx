import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import note from '../assets/note.svg'

const NavBar = () => {

  const [tab,setTab] = useState(true) ; 

  return (
    <div className='flex
    w-[70%] ml-2
    sm:flex-row flex-col  sm:gap-x-6 sm:justify-evenly text-3xl sm:mx-auto sm:items-center'>
      
      <NavLink to="/">
        <div className={` p-2 
           rounded-2xl ${tab?'bg-[#C5ADC5]  text-white scale-105' : 'text-[#178582] '} duration-100`}
           onClick={()=>{setTab(true)}} 
           >
          Home
        </div>
      </NavLink>
     
     
      <div className='sm:mb-2 display hidden sm:block'>
          <img
            src={note}
            alt=''
            className='sm:w-28'
          />

      </div>

      <NavLink to="/pastes">

        <div className={`p-2 text-[#178582] rounded-2xl ${!tab?'bg-[#C5ADC5] text-white scale-105' 
          : ' text-[#178582] '} duration-75  `}
            onClick={()=>{setTab(false)}}
          >
          Pastes
        </div>

      </NavLink>


    </div>
  )
}

export default NavBar