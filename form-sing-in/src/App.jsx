import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sign from './Sign'
import Home from './Home'
import Admin from './Admin'
import Adminadd from './Adminadd'
import Pro from './pro'
import Forget from './Forget'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/forget' element={<Forget/>}></Route>
      <Route path='/admin'element={<Admin/>}></Route>
      <Route path='/' element={<Sign/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/adminadd' element={<Adminadd/>}></Route>
      <Route path='/pro' element={<Pro/>}></Route>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App