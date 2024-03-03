import { useState } from 'react'
import { Signin } from './pages/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Dashboard } from './pages/dashboard';
import { AddSubjectCard } from './components/addSubject';
import { Content } from './pages/topicContent';
function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Dashboard/>}/>
        <Route path="/add" element={<AddSubjectCard/>}/>  
        <Route path='/topics' element={<Content/>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
