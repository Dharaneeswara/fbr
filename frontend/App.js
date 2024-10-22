import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Navbar from './component/Navbar'
// import Home from './Home'
import Datapage from './component/Datapage'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        {/* <Route path='/home' element={<Home/>}></Route> */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/datapage' element={<Datapage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App