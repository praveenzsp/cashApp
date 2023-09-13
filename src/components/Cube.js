import React from 'react'
import introCube from '../assets/introCube.png'

function Cube() {
  return (
    <div>
        <img src={introCube} className='md:w-[74px] md:h-[74px] absolute md:top-[48px] md:left-[228px] w-[30px] top-[120px] left-[50px]'></img>
    </div>
  )
}

export default Cube