import React from 'react'
import Login from './pages/Auth/Login'
import Home from './pages/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App