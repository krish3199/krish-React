import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  let [input,setInput] = useState("") 
  let dispatch = useDispatch()

  let display = useSelector(store=>store.display)

  let handeladd = ()=>{
    dispatch({type : 'ADD', payload: input})
    setInput("")
  }
  let handeldelete = (i)=>{
    dispatch({type : 'DELETE', payload: i})
  }
  let handelcleraalla = ()=>{
    dispatch({type : 'ClearAlla'})
  }
  return (
    <>
      <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
      <button onClick={handeladd}>Add</button>
      <button onClick={handelcleraalla}>Clear all</button>

      <ul>
        {
          display.map((e,i)=>{
            return(
              <div key={i}> 
                  <li>{e}</li>
                  <button onClick={()=>handeldelete(i)}>Delete</button>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default App