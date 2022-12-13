import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg'>
      <div className='container px-4 my-2 mx-12 flex flex-wrap items-center justify-between'>
        <div>
          <NavLink to='/'>CV-Builder</NavLink>
        </div>
        <div>
          <NavLink to='/' className='bg-slate-400 text-black rounded-md px-2 py-1'>Get Started</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar