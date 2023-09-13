import React from 'react'
import apple from '../assets/apple.png'
import playstore from '../assets/playstore.png'
import arrow from '../assets/arrow.png'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'

function Footer() {
  return (
    <div className='md:flex md:flex-row flex-col-reverse items-center justify-between md:right-[60px] md:mx-[60px] md:mt-44 mt-[300px] mx-[10px]  md:pb-[50px]'>

        <div id='button-grp' className='flex md:gap-5 gap-2 md:flex-row flex-col'>
            <button className='bg-black border-white border-[1px] text-white md:p-[15px] md:px-[20px] rounded-[7px] flex items-center justify-center py-[10px]'><img src={apple} className='pr-[10px]'/><p className='font-[800]'>APP STORE</p></button>
            <button className='bg-black border-white border-[1px] text-white md:p-[15px] rounded-[7px] flex items-center justify-center z-10 py-[10px]'><img src={playstore} className='pr-[5px]'/><p className='font-[800]'>GOOGLE PLAY</p></button>
        </div>

        <img src={arrow} className='md:visible invisible md:w-[18px] md:h-[30px] md:ml-[190px]'></img>

        <p className='md:text-[10px] font-[700] text-[#B6B6B6] leading-[13px] md:w-[370px] z-10 text-[8px]'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>

        <ul className='flex gap-7 md:-ml-[90px] justify-evenly py-4 md:py-0'>
            <li><img src={frame3} className='md:w-[24px] md:h-[24px] text-white '/></li>
            <li><img src={frame1} className='md:w-[24px] md:h-[24px] text-white'/></li>
            <li><img src={frame2} className='md:w-[24px] md:h-[24px] text-white'/></li>
        </ul>
    </div>
  )
}

export default Footer