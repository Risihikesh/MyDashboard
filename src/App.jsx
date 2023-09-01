import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from './hero/SignIn'
import Dashboard from './hero/Dashboard'

function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path = '/' element={<SignIn/>}/>
         <Route path = '/dashboard' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
