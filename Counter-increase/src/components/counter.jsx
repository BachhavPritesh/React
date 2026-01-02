import React, { useState } from 'react'
import './counter.css'


const counter = () => {

const [count,setCount] = useState(0);

  return (
    <div className='container'>
       <h2>{count}</h2>
        <button onClick={()=>{ setCount(count+1) }}>CLICK ME</button>
         <button onClick={()=>{ setCount(count-1) }}>Decrease</button>
    </div>
  )
}

export default counter