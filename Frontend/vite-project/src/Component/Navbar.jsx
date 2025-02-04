import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between bg-amber-100 p-3'>
            <p className='ml-4 text-xl font-serif'>BookStore</p>
            <div className='flex gap-3'>
                <p><a>Home</a></p>
                <p><a>Course</a></p>
                <p>Contact</p>
                <p>About</p>
            </div>
            <div className='mr-5'>
                <button className=''>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar