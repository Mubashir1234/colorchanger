import React, { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

  

function App() {
  let [color, setColor] = useState("black")
  function colorChanger(e){
    let buttonText = e.target.innerText;
    return setColor(buttonText)
  }
  const dynamicStyle = { width: '100vw', height: '100vw', backgroundColor: color  }
// 
  useEffect(()=>{
    console.log("mounted color is " , color)

    // return ()=>{
    //   console.log("unmounted color is" , color)
    // }
  },[color])

  return (
    <>
      <div style={dynamicStyle}> 
        <button onClick={colorChanger} className=" m-4 px-4 py-2 bg-white text-black">white</button>
        <button onClick={colorChanger} className=" m-4 px-4 py-2 bg-pink-500 text-white">pink</button>
        <button onClick={colorChanger} className="m-4 px-4 py-2 bg-red-500 text-white">red</button>
        <button onClick={colorChanger} className=" m-4 px-4 py-2 bg-orange-500 text-white">orange</button>
        <button  onClick={colorChanger} style={{background: "blue", width: "100px", height: "50px"}}>blue</button>
        </div>
        {/* <h1 className='bg-green-400'> tailwind </h1> */}
    </>
  )
}

export default App
