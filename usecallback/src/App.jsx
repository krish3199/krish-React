import React, { useCallback, useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)

  let handelin = useCallback(()=>{
      console.log("Hello")
      return setCount(count + 1)
  },[count])
  return (
    <>
    <h1>count : {count}</h1>
    <button onClick={handelin}>+</button>
    </>
  )
}

export default App