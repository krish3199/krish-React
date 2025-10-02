import React, { Component } from 'react'
import Displya from './Displya'
import Componet from './Componet'

const App = () => {
   const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=2"
   const HigherOrder = Componet(Displya,url)
  return (
   <>
    <HigherOrder/>
   </>
  )
}

export default App