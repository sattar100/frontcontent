import React from 'react'
import Rightdescription from './Rightdescription'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 bg-white text-white rounded-3xl  '>
      <img  className='w-full h-full object-cover rounded-3xl'src={props.img} alt="" />
 <Rightdescription id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard