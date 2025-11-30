import React from 'react'
import Arrow from './Arrow'
import Hero from './Hero'
const LeftContent = () => {
  return (
    <div className='w-1/4 h-full flex flex-col justify-around pl-5'>
    
       <Hero/>
       <Arrow/>
    </div>
  )
}

export default LeftContent