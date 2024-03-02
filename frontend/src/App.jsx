import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/home' />
      </Routes>
    </BrowserRouter>
  )
}


export default App
