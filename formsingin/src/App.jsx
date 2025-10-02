import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sign from './Sign'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
