import React, { useMemo, useState } from 'react'

const App = () => {

  let [count,setCount] = useState(0)

  let handelin = ()=>{
    setCount(count + 1)
  }
  let memo = useMemo(()=>{
    return count * 2
  },[count])
  return (
    <>
    <h1>count : {count}</h1>
    <h1>counting : {memo} </h1>
    <button onClick={handelin}>+</button>
    </>
  )
}

export default App