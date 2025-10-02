import CounterContext from './Context'
import React, { useState } from 'react'
import Display from './Display'

const App = () => {
  let [count, setCount] = useState(0)

  let handelin = () => setCount(count + 1)
  let handeldec = () => setCount(count - 1)

  return (
    <>
      <CounterContext.Provider value={count}>
        <Display />
      </CounterContext.Provider>
      <button onClick={handelin}>+</button>
      <button onClick={handeldec}>-</button>
    </>
  )
}

export default App
