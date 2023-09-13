import React from 'react'
import logo from '../assets/logo.svg'
import eye  from '../assets/eye.png'

function Navbar() {
    const menuItems = ['SIGNIN', 'LEGAL', 'LICENSES', 'SECURITY', 'CAREERS', 'PRESS', 'SUPPORT', 'STATUS', 'CODEBLOG']


  return (
    <div className='flex justify-between items-center relative md:pt-[25px] md:mx-[60px] mx-[10px] pt-[15px] '>
        <img src={logo} alt='logo' className='md:w-[30px] md:h-[44px] w-[20px]'></img>
        <ul className='md:flex md:gap-[20px] md:items-center hidden'>
            {
                menuItems.map(item=>{
                    return (
                        <li className='font-[800] text-[14px] leading-[18px] tracking-[0.5px] text-white'>{item}</li>
                    )
                })
            }
            
        </ul>
        <img src={eye} alt='logo' className='md:w-[64px] md:h-[36px] w-[40px]'></img>
    </div>
  )
}

export default Navbar