import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/comments")
      .then((res) => {
        console.log(res.data)  
      })
      .catch((err) => {
        console.error("Error fetching data:", err)
      })
  }, []) 

  return (
    <>
      <h1>Check Console for Data</h1>
    </>
  )
}

export default App
