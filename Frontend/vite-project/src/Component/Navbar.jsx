import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
        <div className='container'>
          <div className='flex justify-between items-center bg-amber-200'>
            <div className=''>
              <a className='font-bold text-xl sm:text-2xl flex gap-2'> 
                <img src={logo} alt='' className='w-12'/>
                BOOK
              </a>
              </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar