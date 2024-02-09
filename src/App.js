import React, { useState } from 'react'
import Navbar from './component/Navbar'
// import About from '../file/About'
// import Support from '../file/Support'
import News from './component/news'

// import Card from './component/Card'



export default function App() {
  
  
  


  const [Mode, setMode]=useState("light")
    

 const click=()=>{
      if(Mode==="light"){
          setMode('dark')
          document.body.style.backgroundColor="black"
      }
      else{
          setMode( 'light')
          document.body.style.backgroundColor="white"
      }


  }
  return (
    
    <div>
        <Navbar   title="Hey News" home="Home" clk={click} style={Mode}/>
        <News/>
        </div>

       

  )
}

