import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div className= ' flex-row flex shrink-0 flex-nowrap gap-5 p-6 rounded-3x h-full '>

 {props.user.map(function(elem ,idx){
  return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
 })}
    
    </div>
  )
}

export default RightContent