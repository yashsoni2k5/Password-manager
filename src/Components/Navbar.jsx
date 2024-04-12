import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 bg-slate-800 flex items-center justify-around text-white'>
        <div className="logo font-semibold text-2xl">
         <span>  &lt; </span>
        
        pass<span className='text-green-800 font-bold'>OP/&gt;</span>
        
        </div>
        <ul className='flex gap-5'>
            <li className='hover:font-bold' >Home</li>
            <li className='hover:font-bold'>about</li>
            <li className='hover:font-bold'>contact</li>
        </ul>
        
          </div>
  )
}

export default Navbar