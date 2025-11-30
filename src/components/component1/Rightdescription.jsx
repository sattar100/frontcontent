import React from 'react'
import { ArrowRight } from 'lucide-react'
const Rightdescription = (props) => {
  return (
     <div className=' absolute top-0 left-0 px-5 py-3 w-full h-full flex flex-col justify-between'>
    <h2 className='bg-blue-500 rounded-full w-10 h-10 py-2 px-3.5 '>{props.id+1}</h2>
    <div>
      <p  className=' leading-normal mb-8'>{props.intro}</p>
    <div className='flex justify-between mb-3'>
      <button className='bg-blue-500 rounded-4xl text-white px-3 py-2' type="button">{props.tag}</button>
      <button type="button"><ArrowRight className='bg-blue-500 rounded-4xl text-white p-2 size-9' /></button>
    </div>
    </div>
   </div>
  )
}

export default Rightdescription