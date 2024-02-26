import React, { useState } from 'react'

import logo from '../assets/logo.png'



const Nav = () => {
  const [isOpenNav,setIsOpenNav] = useState(false)
  return (
    
    <div className='h-[90px] flex items-center text-primary md:justify-around sticky'>
      <img src={logo} alt='logo img' className='h-[40px] w-[240px]'/>
     
     {(!isOpenNav) ?
     <svg xmlns="http://www.w3.org/2000/svg" className='h-[40px] w-[40px]'  viewBox="0 0 24 24" fill="rgba(180,151,70,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      :
      (<nav>
        <ul className='flex flex-row gap-4'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Testimonials</a></li>
          <li><a href='#'>Our work</a></li>
          <li><a href='#'>News</a></li>
          
        </ul>
      </nav>)
      }
    </div>
  )
}

export default Nav