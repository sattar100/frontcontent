import React from 'react'

import RightContent from './RightContent'
import LeftContent from './leftContent'

const Page1Content = (props) => {
  return (
    <div className=' mx-5 px-7 py-6 flex items-center justify-between gap-x-6 h-[85vh] rounded-4xl bg-red-400'>
      <LeftContent/>
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content