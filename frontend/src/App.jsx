import { useState } from 'react'
import { Signin } from './pages/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
