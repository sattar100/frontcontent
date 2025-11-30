import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/component1/section1'
import Section2 from './components/componet2/section2'

function App() {
  const user=[
    {
      img:'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, omnis repudiandae pariatur et nesciunt?',
      tag:'Satisfied'
    }
    , {
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, omnis repudiandae pariatur et nesciunt?',
      tag:'Underserved'
    }, {
      img:'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, omnis repudiandae pariatur et nesciunt?',
      tag:'UnderBanked'
    }
  ]
  return (
    <>
<Section1 user={user}/>

</>
)

}

export default App
