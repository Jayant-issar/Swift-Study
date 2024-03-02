import { useState } from 'react'
import { Signin } from './pages/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
