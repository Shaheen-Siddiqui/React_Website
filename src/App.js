import React from 'react'
import Home from './Home'
import About from './About';
import Conclusion from './Conclusion';
import Navlink from './Navlink';
import {Routes,Route} from 'react-router-dom'
import Card from './Card'

const App = () => {
  return (
    <>
      <Navlink />

    <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="" element={<Home/>} />
    <Route path="/conclusion" element={<Conclusion/>} />
    <Route path="/contact" element={<Card/>}/>
    </Routes>

    </>
  )
}

export default App
