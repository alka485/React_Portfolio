/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
//---------------------dependency
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <Routes>
        {/* <Route path= "/" element={}/> */}
      </Routes>
    </>
  )
}

export default App
