import React, { useState } from 'react'
import { myContext,myContext1 } from './myContext'
import { B } from './B'

export const A = () => {
    const [state, setState] = useState("Geeks")
    const [input, setInput] = useState("");
  return (
    <div className='context' style={{textAlign:"center"}}>
        <h1>A</h1>
        <button onClick={()=>{
            setState("Geekster")
        }}>click</button>
        <input type='text' onChange={(e)=>{
            setInput(e.target.value)
        }} />
        <button onClick={()=>{
            setState(input)
        }}>submit</button>
        
        {/* <myContext1.Provider value={state}>
            <B/>
        </myContext1.Provider> */}
    </div>
  )
}