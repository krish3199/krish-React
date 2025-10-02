import React, { useContext } from 'react'
import counterContext from './Context'

const Display = () => {

    let context = useContext(counterContext)
  return (
    <>
    <h1>{context}</h1>
    </>
  )
}

export default Display